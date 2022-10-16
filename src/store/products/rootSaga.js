import { takeLatest, all } from 'redux-saga/effects';

import { ProductsListTypes, fetchProducts } from './list';


export function* productsSagas(api) {
  yield all([
    takeLatest(ProductsListTypes.FETCH_PRODUCTS, fetchProducts, api),
  ]);
}
