import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./AppRoutes";
import './assets/scss/main.scss';

import store from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
      <Toaster />
    </Provider>
  );
}

export default App;
