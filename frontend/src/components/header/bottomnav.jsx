import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useUser from '../../hooks/useUser'
import UserContext from "../../context/UserContext";

const useStyles = makeStyles({});

export default function MobileNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { user } = useContext(UserContext);
  const {isLogged,logout} = useUser();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="bottomNav"
    >
      <BottomNavigationAction
        component={Link}
        label="Entrenamientos"
        icon={<FitnessCenterIcon />}
        to="/entrenamientos"
      />
      {
        isLogged
        ?
        <BottomNavigationAction
          component={Link}
          label={user.username}
          icon={<AccountCircleIcon />}
          to="/profile"
        />
        :
        <BottomNavigationAction
          component={Link}
          label="Perfil"
          icon={<AccountCircleIcon />}
          to="/profile"
        />
      }
      <BottomNavigationAction
        component={Link}
        label="Home"
        icon={<HomeIcon />}
        to="/home"
      />
      {
        isLogged
        ?
        <BottomNavigationAction
          onClick={logout}
          label="Logout"
          icon={<AccountCircleIcon />}
          to="/login"
        />
        :
        <BottomNavigationAction
          component={Link}
          label="Login"
          icon={<AccountCircleIcon />}
          to="/login"
        />
      }
    </BottomNavigation>
  );
}
