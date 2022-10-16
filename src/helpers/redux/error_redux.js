import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import * as CONSTANTS from 'apisauce';

const { Types, Creators } = createActions({
  showError: ['section', 'errorMessage', 'errorType'],
  clearError: ['section'],
  clearAll: [],
}, { prefix: '@@A1-ERROR/' });

export const UtilTypes = Types;
export default Creators;

const CLIENT_ERROR = 'CLIENT_ERROR';

/* ------------- Initial state ------------- */

export const INITIAL_STATE = Immutable({});

/* ------------- SELECTORS -------------------- */

export const ErrorSelectors = {
  /**
   * @param {Object} state
   * @param {String} section
   * =>
   * @param {String} fieldName
   * @returns {Object} redux-form-meta-like object
   *
   * Why: Supports redux-form-like validation errors to be passed from the backend, down to fields
   *  that aren't hooked up using `reduxForm()`.
   *
   * Usage:
   *  - In your mapStateToProps: `errorsForField: ErrorSelectors.getErrorsForSectionAsMeta(state, 'form-name/section'),`
   *  - In your component `this.props.errorsForField('field-name')`
   *
   * Works in tandem the `showError` reducer.
   * Returns an object in the following format:
   * {
   *    error: 'String',
   *    touched: true,
   * }
   */
  getErrorsForSectionAsMeta: (state, section) => (fieldName) => {
    const errorsInSection = state.errors[section];

    if (errorsInSection && errorsInSection.errorMessage && errorsInSection.errorMessage[fieldName]) {
      return {
        error: errorsInSection.errorMessage[fieldName],
        touched: true,
      };
    }

    return { error: null, touched: null };
  },
  /**
   * Get errors for a specific section
   * @param {object} state - application state getter
   * @param {array} section - name of the section you wish to monitor
   * @returns {boolean}
   */
  getErrorForSection: (state, section) => (state.errors && state.errors[section] ? state.errors[section] : null),
};

/* ------------- REDUCERS -------------------- */


/**
 * Displays an error if problem is not null
 * problem is one of :
 *
 *  null - no error
 * 'CLIENT_ERROR'
 * 'SERVER_ERROR'
 * 'TIMEOUT_ERROR
 * 'CONNECTION_ERROR
 * 'NETWORK_ERROR
 * 'CANCEL_ERROR'
 */
const genericError = 'Error, please try again later.'
const timeoutError = 'Sorry, a network error has occurred. We were unable to perform the request. Please try again later.'
const networkError = 'Network error, please try again later.'
const cancelError = 'The operation was cancelled.'
const errorsMap = {
  [CONSTANTS.NONE]: null,
  [CONSTANTS.CLIENT_ERROR]: genericError,
  [CONSTANTS.SERVER_ERROR]: genericError,
  [CONSTANTS.TIMEOUT_ERROR]: timeoutError,
  [CONSTANTS.CONNECTION_ERROR]: genericError,
  [CONSTANTS.NETWORK_ERROR]: networkError,
  [CONSTANTS.CANCEL_ERROR]: cancelError,
  [CONSTANTS.UNKNOWN_ERROR]: networkError,
};

const showError = (state, { section, errorMessage, errorType }) => {
  if (errorMessage && typeof errorMessage === 'object') {
    // NOTE Brandon:
    // Some error messages have a 'detail' error message that we need to handle separately
    const keys = Object.keys(errorMessage), key = keys[0];


    if (keys.length === 1 && (key === 'detail' || key === 'non_field_errors' || key === 'error')) {
      return state.merge({
        [section]: {
          errorMessage: errorMessage[key],
          errorType: errorType || CLIENT_ERROR,
        },
      });
    }
  }

  return state.merge({
    [section]: {
      errorMessage: errorMessage || errorsMap[errorType],
      errorType: errorType || CLIENT_ERROR,
    },
  });
};

const clearError = (state, { section }) => {
  return state.merge({
    [section]: {
      errorMessage: null,
      errorType: null,
    },
  });
};

export const errorReducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_ERROR]: showError,
  [Types.CLEAR_ERROR]: clearError,
});
