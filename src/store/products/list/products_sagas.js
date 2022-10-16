import { call } from "redux-saga/effects";
import { requestSaga } from "../../../helpers/sagas/request_saga";
import { ProductsListActions } from "./products_redux";

export function* fetchProducts(api) {
  const response = yield call(requestSaga, {
    errorSection: "fetchProducts",
    loadingSection: "fetchProducts",
    apiMethod: api.fetchProducts,
    successAction: ProductsListActions.fetchProductsSuccess,
  });
}
