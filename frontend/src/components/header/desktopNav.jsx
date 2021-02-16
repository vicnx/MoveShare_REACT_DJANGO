import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

//It is used to tell the Material Ui framework to search the css first
import "./header.css";

export default function DesktopNav() {
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
          <Button className="button" to="/login" component={Link}>
            <AccountCircleIcon color="primary" />
            <Typography variant="body2">Login</Typography>
          </Button>
          <Button className="button" to="/home" component={Link}>
            <HomeIcon color="primary" />
            <Typography variant="body2">Home</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
