import "./App.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./themeConfig";
import React, { Suspense } from "react";
import Login from "./pages/login/login3";
import {UserContextProvider} from "./context/UserContext";
import { ExercicesContextProvider } from "./context/ExercicesContext";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import { ProfileContextProvider } from "./context/ProfileContext";
import PrivateRoute from "./components/routes/PrivateRoutes";



// import { Link, Route, Switch } from "wouter"; //alternativa a router-dom

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header";

const HomePage = React.lazy(() => import("./pages/home/home"));
const Exercices = React.lazy(() => import("./pages/exercices/exercices"));
const Workouts = React.lazy(() => import("./pages/workouts/workouts"));
const WorkoutDetail = React.lazy(() => import("./pages/workouts/workoutDetail"));
const Profile = React.lazy(() => import("./pages/profile/profile"));
const Register = React.lazy(() => import("./pages/register/register"));
const createExercicePage = React.lazy(() => import("./pages/exercices/createExercice"));

function App() {
  console.log("app");
  return (
    <UserContextProvider>
        <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <Header></Header>
          <ExercicesContextProvider>
            <WorkoutsContextProvider>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/home" component={HomePage}></Route>
              <Route path="/exercices" component={Exercices}></Route>
              <Route path="/workouts" component={Workouts}></Route>
              <PrivateRoute component={createExercicePage} path="/new/exercice" exact />
              <ProfileContextProvider>
                <Route path="/workout/:workoutid" component={WorkoutDetail}></Route>

                <Route path="/@:username" component={Profile}></Route>
              </ProfileContextProvider>
            </WorkoutsContextProvider>
          </ExercicesContextProvider>
        </Suspense>
        </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
