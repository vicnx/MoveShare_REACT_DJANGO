import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
const useStyles = makeStyles({});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        label="Entrenamientos"
        icon={<FitnessCenterIcon />}
      />
      <BottomNavigationAction label="Perfil" icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    </BottomNavigation>
  );
}
