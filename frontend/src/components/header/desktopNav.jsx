import React, {useContext} from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useUser from '../../hooks/useUser'
import UserContext from "../../context/UserContext";


//ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

//It is used to tell the Material Ui framework to search the css first
import "./header.css";

export default function DesktopNav() {
  // const isLogged = false;
  const {isLogged,logout} = useUser();
  const { user } = useContext(UserContext);

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-content">
        <Typography variant="h6">MoveShare</Typography>
        <div className="icon-list">
          <Button className="button" to="/trainings" component={Link}>
            <FitnessCenterIcon color="primary" />
            <Typography variant="body2">Entrenamientos</Typography>
          </Button>
          <Button className="button" to="/profile" component={Link}>
            <AccountCircleIcon color="primary" />
            <Typography variant="body2">Perfil</Typography>
          </Button>
          {
            isLogged
            ?
            <Button className="button" onClick={logout}>
              <AccountCircleIcon color="primary" />
              <Typography variant="body2">Logout</Typography>
              <Typography variant="body2">{user.username}</Typography>
            </Button>
            :           
            <Button className="button" to="/login" component={Link}>
              <AccountCircleIcon color="primary" />
              <Typography variant="body2">Login</Typography>
            </Button>
          }

          <Button className="button" to="/home" component={Link}>
            <HomeIcon color="primary" />
            <Typography variant="body2">Home</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
