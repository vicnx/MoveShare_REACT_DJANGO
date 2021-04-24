import React, { useState, useEffect,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UserContext from "../../context/UserContext";
import useUser from '../../hooks/useUser';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useCategories} from '../../hooks/useCategories'
import {useExercice} from '../../hooks/useExercice'
import MSalert from '../alerts/alert'


//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./categories.css";
import { useHistory } from "react-router-dom";
import Loading from 'react-simple-loading';



const HomeCategories = ({quantity}) => {
  const {categories} = useCategories(false)

  const printCategories = (e) =>{
    let categories_print = []
    for (let i = 0; i < quantity; i++) {
      if(categories[i]){
        categories_print.push(categories[i])
      }
    }
    return categories_print
  }
  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }


  return (
    <div className="categories_list">
      {
        
        printCategories().map((category,index) =>
          <div className="category_preview">
            <div className="category_preview_left">
              <img src={category.image} onError={onError}/>
            </div>
            <div className="category_preview_right">
              <span>{category.name}</span>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default HomeCategories;
