import { all, fork } from "redux-saga/effects";
import API from '../services/api';

/* ------------- API ------------- */
export const api = API.create();

/* ------------ Sagas ------------ */
import { productsSagas } from './products';

export default function* root() {
  yield all([
    // |------------ Products ------------
    fork(productsSagas, api),
  ]);
}
