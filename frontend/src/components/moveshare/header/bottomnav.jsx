import React, {useContext,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useUser from 'hooks/useUser'
import UserContext from "context/UserContext";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({});

export default function MobileNav() {
  const [menuProfile, setMenuProfile] = useState(null);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { user } = useContext(UserContext);
  const {isLogged,logout} = useUser();
  console.log(user);
  const openMenu = (event) => {
    setMenuProfile(event.currentTarget);
  };
  const closeMenu = () => {
    setMenuProfile(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="bottomNav"
    >
      <div id="menu"className="menu"></div>
      <BottomNavigationAction
        component={Link}
        label="Entrenamientos"
        value="entrenamientos"
        icon={<FitnessCenterIcon />}
        to="/workouts"
      />
      <BottomNavigationAction
        component={Link}
        label="Ejercicios"
        value="exercices"
        icon={<ShoppingBasketIcon />}
        to="/exercices"
      />
      {
        isLogged
        ?
        <>
        <BottomNavigationAction
          onClick={openMenu}
          label={user.username}
          value="user"
          icon={              <Avatar src={user.image} className="image_user_menu"/>        }
          to={"/@"+user.username}
        />
        <Menu
          id="profile-menu-bottom"
          anchorEl={menuProfile}
          keepMounted
          open={Boolean(menuProfile)}
          onClose={closeMenu}
        >
          <MenuItem onClick={closeMenu} onClick={()=>{setValue("user")}} to={"/@"+user.username} component={Link}>
            <AccountCircleIcon color="primary" />
            <span className="menu-item">Perfil</span>
          </MenuItem>
          <MenuItem onClick={closeMenu} onClick={()=>{setValue("user")} }to={"/new/exercice"} component={Link}>
            <ShoppingBasketIcon color="primary" />
            <span className="menu-item">Nuevo Ejercicio</span>
          </MenuItem>
          <MenuItem onClick={closeMenu} onClick={()=>{setValue("user")}} to={"/new/workout"} component={Link}>
            <FitnessCenterIcon color="primary" />
            <span className="menu-item">Nuevo Entrenamiento</span>
          </MenuItem>
          <MenuItem onClick={logout} onClick={()=>{setValue("user")}}>                
            <ExitToAppIcon color="primary" />
            <span className="menu-item">Salir</span>
          </MenuItem>
        </Menu>
        </>
        :
        <BottomNavigationAction
        component={Link}
        label="Login"
        value="login"

        icon={<AccountCircleIcon />}
        to="/login"
      />
      }
      <BottomNavigationAction
        component={Link}
        label="Home"
        value="home"

        icon={<HomeIcon />}
        to="/home"
      />
    </BottomNavigation>
  );
}
