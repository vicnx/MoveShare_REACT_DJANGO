import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./banner.css";
import {Typography} from "@material-ui/core";

const Banner = ({page}) => {
  return (
    <div className="header_home">
      <Typography variant="h1" className="header_home_title">
            <span>{page}</span>
      </Typography>
      <img src="https://royaltymarketing.com/wp-content/uploads/2016/07/Full-Time-Fitness-Header-Divider-2.jpg" className="header_home_image"/>
    </div>
  );
};

export default Banner;
