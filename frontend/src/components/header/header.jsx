import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MobileNav from "./bottomnav";
import DesktopNav from "./desktopNav";

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
const displayMobile = () => {
  return <MobileNav className="BottomNav" />;
};

const displayDesktop = () => {
  return <DesktopNav />;
};

const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  useEffect(() => {
    console.log("useeffect");
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const changeNavbarColor = () =>{
    if(state.mobileView ==false){
      if(window.scrollY >= 80){
        if(document.getElementById('menu').classList.contains("navbar-home")){
          document.getElementById('menu').classList.remove("navbar-home");
          document.getElementById('menu').classList.add("navbar");
        }
       }
       else{
        if(document.getElementById('menu').classList.contains("navbar")){
          document.getElementById('menu').classList.remove("navbar");
          document.getElementById('menu').classList.add("navbar-home");
        }
       }
    }

 };
 
 window.addEventListener('scroll', changeNavbarColor);
  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      {mobileView ? displayMobile() : displayDesktop()}
      {/* we create an empty div where we create the offset class created with the size of the navbar. (this will add a separation of the navbar with the content) */}
      <div className={classes.offset}></div>
    </StylesProvider>
  );
};

export default Header;
