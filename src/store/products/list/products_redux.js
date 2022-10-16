import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  fetchProducts: null,
  fetchProductsSuccess: ['payload'],
  resetProducts: null,
}, { prefix: '@@A1-PRODUCTS/' });

export const ProductsListTypes = Types;
export const ProductsListActions = Creators;

/* ------------- Initial state ------------- */
export const PRODUCTS_LIST_INITIAL_STATE = Immutable({
  count: null,
  data: null,
  previous: null,
  next: null,
});

export const ProductsListSelectors = {
  getProducts: (state) => state.products.data || [],
};

/* ------------- REDUCERS ------------------- */
const fetchProductsRequestSuccess = (state, { payload }) => {
  return state.merge({
    count: payload.count,
    data: payload.results,
    previous: payload.previous,
    next: payload.next,
  });
};

const resetProductsState = () => PRODUCTS_LIST_INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const productsListReducer = createReducer(PRODUCTS_LIST_INITIAL_STATE, {
  [Types.FETCH_PRODUCTS_SUCCESS]: fetchProductsRequestSuccess,
  [Types.RESET_PRODUCTS]: resetProductsState,
});
