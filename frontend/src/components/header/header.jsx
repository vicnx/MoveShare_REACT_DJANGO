import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
} from "@material-ui/core";
//ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./header.css";
const useStyles = makeStyles((theme) => ({
  //We get the total height of the navbar (this is a default material-ui configuration)
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  ligthColor: {
    color: theme.palette.primary.light,
  },
  appbar: {
    alignItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      <AppBar position="fixed" className="navbar">
        <Toolbar className="navbar-content">
          <Typography variant="h6">MoveShare</Typography>
          <div className="icon-list">
            <Button className="button">
              <FitnessCenterIcon color="primary" />
              <Typography variant="body2">Entrenamientos</Typography>
            </Button>
            <Button className="button">
              <AccountCircleIcon color="primary" />
              <Typography variant="body2">Perfil</Typography>
            </Button>
            <Button className="button">
              <HomeIcon color="primary" />
              <Typography variant="body2">Home</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* we create an empty div where we create the offset class created with the size of the navbar. (this will add a separation of the navbar with the content) */}
      <div className={classes.offset}></div>
    </StylesProvider>
  );
};

export default Header;
