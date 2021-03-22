import React, { useState, useEffect,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useUser from '../../hooks/useUser';
import UserContext from "../../context/UserContext";
import CreateExercice from "../../components/exercices/exercice-create";
import {Container} from "@material-ui/core";
import Banner from '../../components/banner_page/banner'


//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./createExercice.css";
const createExercicePage = () => {
  return (
    <>
      <Banner page="New Exercice"/>
      <Container className="create_exercice">
        <CreateExercice />
      </Container>
    </>
);
};

export default createExercicePage;
