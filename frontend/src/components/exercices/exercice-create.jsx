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
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';






//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./exercice-create.css";
import {Typography} from "@material-ui/core";

const CreateExercice = () => {
  const {isLogged,logout,checkOwner,updateUser} = useUser();
  const { user } = useContext(UserContext);
  const [exercice_desc, setExerciceDesc] = useState("");
  const [exercice_name, setExerciceName] = useState("");
  const [exercice_image, setExerciceImage] = useState("");
  const [categories, setExerciceCategories] = useState([]);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



  const handleSubmit = (e) => {
    // updateUser(image,bio)
    e.preventDefault();
  };

  const handleChange= (e) => {
    // updateUser(image,bio)
    e.preventDefault();
  };

  return (
    <div className="create_exercice_div">
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
        
        <InputLabel id="label_multiple">Categories</InputLabel>
        <Select
          labelId="label_multiple"
          id="multiple_categories"
          multiple
          fullWidth
          value={categories}
          onChange={handleChange}
          input={<Input />}
        >
          {options.map((option) => (
            console.log(option),
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
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
    </div>

  );
};

export default CreateExercice;
