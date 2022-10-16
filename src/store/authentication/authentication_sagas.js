import { all, call, put, select } from 'redux-saga/effects';
import { startSubmit, stopSubmit, setSubmitSucceeded, setSubmitFailed } from 'redux-form';
import { LOGIN_FORM } from './authenticatoin_redux';


export function* login(api, session, action) {
  yield put(startSubmit(LOGIN_FORM));
  // Call API
  const { credentials } = action;
  yield put(ErrorActions.clearError('authentication'));
  const response = yield call(api.login, credentials);

  if (response.ok) {
    // Response is ok (apisauce magic)
    yield put(stopSubmit(LOGIN_FORM));

    const { data } = response;
    const { token, id } = data;

    yield call(api.setAuthorization, token);
    yield call(api.setVersion, 1.0);
    // Get complete user information
    const userResponse = yield call(api.getCurrentUser);

    if (userResponse.ok) {
      // Only put authSuccess once the entire routine is completed
      yield put(AuthenticationActions.authSuccess(userResponse.data));
      const loginRedirect = localStorage.getItem(LOGIN_REDIRECT);
      if (loginRedirect) {
        yield call(history.push, loginRedirect);
        localStorage.removeItem(LOGIN_REDIRECT);
      } else {
        yield call(history.push, '/');
      }
      yield call(initializeUserProgress, api);
    } else {
      yield put(ErrorActions.showError('authentication', userResponse.data, userResponse.problem));
    }
  } else {
    // Response failed, if the error response has specific form errors show them in the form.
    // Otherwise use the generic error system
    const formErrors = ['email', 'password', 'six_digit_text_code'];
    const hasFormErrors = response.data && Object.keys(response.data).find((k) => {
      return formErrors.indexOf(k) >= 0;
    });
    if (hasFormErrors) {
      yield put(stopSubmit(LOGIN_FORM, response.data));
    } else {
      yield put(stopSubmit(LOGIN_FORM));
      yield put(ErrorActions.showError('authentication', response.data, response.problem));
    }
  }
}