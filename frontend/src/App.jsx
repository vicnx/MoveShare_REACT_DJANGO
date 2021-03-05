import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./themeConfig";
import React from "react";
import Login from "./pages/login/login2";
import Home from "./pages/home/home";
import {UserContextProvider} from "./context/UserContext";

// import { Link, Route, Switch } from "wouter"; //alternativa a router-dom

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header";
function App() {
  return (
    <UserContextProvider>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
