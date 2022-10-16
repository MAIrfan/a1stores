import { call, put } from 'redux-saga/effects';
import _ from 'lodash';
import ErrorActions from '../redux/error_redux';
import LoadingActions from '../redux/loading_redux';

/*
  Common fetch/post saga . Saga that executes the following steps
  1) clear errors
  2) call api with params
  3) if success dispatch action with results
  4) if not success dispatch error action

  Params:
  @errorSection: Name of the specific error section (to use with DisplayError component)
  @loadingSection: Same but for loading indicator (to use with SectionLoading)
  @apiMethod (function): The function (usually from api) that will make the request
  @apiParams <Array> : List of parameters that will be passed to the api method.
  @successAction (function): Action creator that will be called with the response data.
  It suppports returning multiple actions to dispatch all of them on success.
  @resultsPath: (optional) If the results are not directly returned in the response data,
    but are wrapped in another property e.g 'results'

  Returns the response in case it's needed by the parent saga for additional logic
*/
export function* requestSaga({
  errorSection,
  loadingSection,
  apiMethod,
  apiParams = [],
  successAction = () => null,
  resultsPath,
}) {
  yield put(ErrorActions.clearError(errorSection));
  yield put(LoadingActions.startLoading(loadingSection));
  const response = yield call(apiMethod, ...apiParams);
  yield put(LoadingActions.stopLoading(loadingSection));
  if (response.ok) {
    const action = successAction(resultsPath ? _.get(response.data, resultsPath) : response.data);
    if (action) { yield put(action); }
  } else {
    yield put(ErrorActions.showError(errorSection, response.data, response.problem));
  }
  return response;
}
