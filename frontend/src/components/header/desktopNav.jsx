import React, {useContext,useState} from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useUser from '../../hooks/useUser'
import UserContext from "../../context/UserContext";


//ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//It is used to tell the Material Ui framework to search the css first
import "./header.css";

export default function DesktopNav() {
  // const isLogged = false;
  const [menuProfile, setMenuProfile] = useState(null);
  const {isLogged,logout} = useUser();
  const { user } = useContext(UserContext);
  const openMenu = (event) => {
    setMenuProfile(event.currentTarget);
  };
  const closeMenu = () => {
    setMenuProfile(null);
  };
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-content">
        <Typography variant="h6">MoveShare</Typography>
        <div className="icon-list">
          <Button className="button" to="/trainings" component={Link}>
            <FitnessCenterIcon color="primary" />
            <Typography variant="body2">Entrenamientos</Typography>
          </Button>
          <Button className="button" to="/exercices" component={Link}>
            <ShoppingBasketIcon color="primary" />
            <Typography variant="body2">Ejercicios</Typography>
          </Button>

          {
            isLogged
            ?
            <>
            <Button className="button" onClick={openMenu}>
              <Avatar src={user.image} className="image_user_menu"/>
              <Typography variant="body2">{user.username}</Typography>
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={menuProfile}
              keepMounted
              open={Boolean(menuProfile)}
              onClose={closeMenu}
            >
              <MenuItem onClick={closeMenu} to={"/@"+user.username} component={Link}>
                <AccountCircleIcon color="primary" />
                <span className="menu-item">Perfil</span>
              </MenuItem>
              <MenuItem onClick={closeMenu} to={"/new/exercice"} component={Link}>
                <ShoppingBasketIcon color="primary" />
                <span className="menu-item">Nuevo Ejercicio</span>
              </MenuItem>
              <MenuItem onClick={closeMenu} to={"/new/workout"} component={Link}>
                <FitnessCenterIcon color="primary" />
                <span className="menu-item">Nuevo Entrenamiento</span>
              </MenuItem>
              <MenuItem onClick={logout}>                
                <ExitToAppIcon color="primary" />
                <span className="menu-item">Salir</span>
              </MenuItem>
            </Menu>
            </>
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
