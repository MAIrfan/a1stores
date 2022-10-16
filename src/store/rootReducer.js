import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from 'connected-react-router';
import { resettableReducer } from "reduxsauce";
import { errorReducer } from "../helpers/redux/error_redux";
import { loadingReducer } from "../helpers/redux/loading_redux";

/* ------------ Reducers ------------ */
import { productsListReducer } from "./products";

const resettable = resettableReducer("RESET");

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,

    // System
    errors: resettable(errorReducer),
    loadings: resettable(loadingReducer),

    // Products
    products: resettable(productsListReducer),
  });
