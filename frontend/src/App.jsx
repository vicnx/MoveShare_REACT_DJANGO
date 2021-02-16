import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./themeConfig";
import React from "react";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;
