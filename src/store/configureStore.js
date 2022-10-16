import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const middleware = [sagaMiddleware];

function myConfigureStore() {
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
const store = myConfigureStore();

export default store;
