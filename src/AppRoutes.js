import React from "react";
import { Route } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from "styled-components";
import { history } from "./store/configureStore";
// import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { themeMap, THEMES } from "./styles/themes";

function AppRoutes() {
  return (
    <ThemeProvider theme={themeMap[THEMES.ADA]}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Home} />
      </ConnectedRouter>
    </ThemeProvider>
  );
}

export default hot(AppRoutes);
