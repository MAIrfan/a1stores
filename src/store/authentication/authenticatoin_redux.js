import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({

}, { prefix: '@@A1-AUTHENTICATION/' });

export const AuthenticationTypes = Types;
export const AuthenticationActions = Creators;

export const LOGIN_FORM = 'loginForm';

export const LOGIN_FORM_FIELDS = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

/* ------------- SELECTORS ------------------ */
export const AuthenticationSelectors = {
  getIsLoggedIn: state => state.authentication.loggedIn,
  getAuthUser: state => state.authentication.user,
};

/* ------------- Initial state ------------- */
export const AUTHENTICATION_INITIAL_STATE = Immutable({
  user: null,
  loggedIn: null,
});

/* ------------- REDUCERS -------------------- */

/* ------------- Hookup Reducers To Types ------------- */
export const authenticationReducer = createReducer(AUTHENTICATION_INITIAL_STATE, {
  [Types.AUTH_SUCCESS]: authRequestSuccess,
});
