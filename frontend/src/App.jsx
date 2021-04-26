import "./App.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./themeConfig";
import React, { Suspense } from "react";
import Login from "./pages/moveshare/login/login3";
import {UserContextProvider} from "./context/UserContext";
import { ExercicesContextProvider } from "./context/ExercicesContext";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import { ProfileContextProvider } from "./context/ProfileContext";
import PrivateRoute from "./components/routes/PrivateRoutes";
import useUser from './hooks/useUser'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';




// import { Link, Route, Switch } from "wouter"; //alternativa a router-dom

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header";

const HomePage = React.lazy(() => import("./pages/moveshare/home/home"));
const Exercices = React.lazy(() => import("./pages/moveshare/exercices/exercices"));
const Workouts = React.lazy(() => import("./pages/moveshare/workouts/workouts"));
const WorkoutDetail = React.lazy(() => import("./pages/moveshare/workouts/workoutDetail"));
const Profile = React.lazy(() => import("./pages/moveshare/profile/profile"));
const Register = React.lazy(() => import("./pages/moveshare/register/register"));
const createExercicePage = React.lazy(() => import("./pages/moveshare/exercices/createExercice"));
const createWorkoutPage = React.lazy(() => import("./pages/moveshare/workouts/createWorkout"));
const PanelAdminMain = React.lazy(() => import("./pages/admin_panel/Routing"));

function App() {
  const { isAuthenticated, logout, user } = useUser()

  console.log("app");
  console.log(user);
  return (
    <UserContextProvider>
      <Check_Admin/>
    </UserContextProvider>
  );
}

const Check_Admin = () =>{
  const { admin } = useUser()
  console.log("admin", admin);

  return(
    <>
      {
        admin ?
        <Suspense fallback={null}>
          <PanelAdminMain/>

        </Suspense>
        :
        <>
          <ThemeProvider theme={theme}>
            <Suspense fallback={null}>
              <Header></Header>
              <ExercicesContextProvider>
                <WorkoutsContextProvider>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route path="/home" component={HomePage}></Route>
                  <PrivateRoute path="/exercices/:category?" component={Exercices}></PrivateRoute>
                  <PrivateRoute path="/workouts" component={Workouts}></PrivateRoute>
                  <PrivateRoute component={createExercicePage} path="/new/exercice" exact />
                  <PrivateRoute component={createWorkoutPage} path="/new/workout" exact />
                  <Route component={ActiveAdmin} path="/admin" />
                  {/* <Redirect from='/admin' to='/home' /> */}
                  {/* <Redirect from='/dashboard' to='/home' /> */}
                  <ProfileContextProvider>
                    <Route path="/workout/:workoutid" component={WorkoutDetail}></Route>
                    <Route path="/@:username" component={Profile}></Route>
                  </ProfileContextProvider>
                </WorkoutsContextProvider>
              </ExercicesContextProvider>
            </Suspense>
          </ThemeProvider>
        </>

      }
    </>
  )

}

const ActiveAdmin =()=>{
  const { isLogged, logout, user } = useUser()
  console.log("ACTIVEADMIN");
  if ( isLogged && user.is_staff ) {
    localStorage.setItem('admin',true)
    window.location.reload()
  } else {
    logout()
  }

  return (<></>)
}

export default App;
