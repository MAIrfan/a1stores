import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    startLoading: ['section', 'loadingMessage'],
    stopLoading: ['section'],
  },
  { prefix: '@@A1-LOADING/' },
);

export const UtilTypes = Types;
export default Creators;

/* ------------- Initial state ------------- */

export const INITIAL_STATE = {};

/* ------------- SELECTORS ------------------ */

const getSections = (state, sections) => {
  const { loadings } = state;

  return sections.reduce((obj, section) => {
    if (!section) return obj;

    const isLoading = !!(loadings[section] && loadings[section].loading);
    return {
      ...obj,
      [section]: isLoading,
    };
  }, {});
};

export const LoadingSelectors = {
  /**
   * Get an object with the loading flags for each section
   * @param {object} state - application state getter
   * @param {array} sections - names of the sections you wish to monitor
   * @returns {object} for example: { buildings: true, floors: false }
   */
  getIndicatorsBySection: getSections,

  /**
   * Get the loading flag of a specific section
   * @param {object} state - application state getter
   * @param {string} section - name of the section you wish to monitor
   * @returns {boolean}
   */
  getIndicatorForSection: (state, section) => {
    return getSections(state, [section])[section];
  },
};

/* ------------- REDUCERS -------------------- */

const startLoading = (state, { section, loadingMessage = 'Please wait, Loading...' }) => {
  return {
    ...state,
    [section]: {
      loading: true,
      loadingMessage,
    },
  };
};

const stopLoading = (state, { section }) => {
  return {
    ...state,
    [section]: {
      loading: false,
      loadingMessage: null,
    },
  };
};

export const loadingReducer = createReducer(INITIAL_STATE, {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
});
