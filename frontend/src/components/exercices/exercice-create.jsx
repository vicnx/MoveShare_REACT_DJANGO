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

// RODAL MODAL
import Rodal from 'rodal';
import '../../../node_modules/rodal/lib/rodal.css';




//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./exercice-create.css";
import {Typography} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Loading from 'react-simple-loading';



const CreateExercice = () => {
  const { user } = useContext(UserContext);
  const [exercice_desc, setExerciceDesc] = useState("");
  const [exercice_name, setExerciceName] = useState("");
  const [exercice_image, setExerciceImage] = useState("");
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const {categories} = useCategories(false)
  const {newExercice,error,loading,ok} = useExercice(false);
  let history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    var exercice = {
      "name": exercice_name,
      "description": exercice_desc,
      "image": exercice_image,
      "categories_id": categoriesSelected,
    }
    if(user){
      newExercice(exercice)
    }else{
      console.log("NO LOGIN");
    }
  };

  const handleChange= (e) => {
    setCategoriesSelected(e.target.value);
  };

  const closeModal=()=>{
    setModalVisible(false)
  }


  return (
    <div className="create_exercice_div">
      {
        loading?
        <Loading/>
        :
         error?
         "Ha ocurrido un error al insertar el ejercicio, vuelva a intentarlo."
         :
          <form className="create_exercice_div_form" noValidate onSubmit={handleSubmit}>

          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setExerciceName(e.target.value)}
              value={exercice_name}
            />
            <InputLabel id="label_multiple">Categories</InputLabel>
            <Select
              labelId="label_multiple"
              id="multiple_categories"
              className="multiselect"
              multiple
              fullWidth
              value={categoriesSelected}
              onChange={handleChange}
              input={<Input />}
            >
                {
                categories?
                categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))
              :
              null}

            </Select>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              rows={4}
              autoFocus
              onChange={(e) => setExerciceDesc(e.target.value)}
              value={exercice_desc}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="image"
              label="Image"
              name="image"
              autoComplete="image"
              autoFocus
              onChange={(e) => setExerciceImage(e.target.value)}
              value={exercice_image}
            />
            

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit_btn"
            >
              New Exercice
            </Button>
          </form>
      }
      <MSalert visible={ok} text="Ejercicio creado con exito!" type="success"></MSalert>
      <MSalert visible={error} text="No se ha podido crear el ejercicio intentelo de nuevo." type="error"></MSalert>
    </div>

  );
};

export default CreateExercice;
