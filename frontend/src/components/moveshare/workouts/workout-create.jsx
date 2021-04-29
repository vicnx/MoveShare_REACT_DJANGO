import React, { useState, useEffect,useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UserContext from "context/UserContext";
import useUser from 'hooks/useUser';
import {useExercices} from 'hooks/useExercices'
import {useWorkout} from 'hooks/useWorkout'
import MSalert from 'components/alerts/alert'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';






//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./workout-create.css";
import {Typography} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Loading from 'react-simple-loading';



const CreateWorkout= () => {
  const [workout_desc, setWorkoutDesc] = useState("");
  const [workout_name, setWorkoutName] = useState("");
  const [workout_image, setWorkoutImage] = useState("");
  const [exercicesSelected, setExercicesSelected] = useState([]);
  const [noexers, setnoexers] = useState(true);
  const [currentExerSelect, setcurrentExerSelect] = useState({'reps':0,'duration':0,'sets':0});
  const {exercices} = useExercices(false)
  const {newWorkout,error,loading,ok} = useWorkout(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [alertErrorVisible, setalertErrorVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let workout = {
      "name": workout_name,
      "image": workout_image,
      "description": workout_desc,
      "difficulties": exercicesSelected,
    }
    newWorkout(workout)
  };
  const openModalExers = (e) =>{
    setModalVisible(true)
  
  }

  const handleClose = (e) =>{
    setModalVisible(false)

  }
  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }

  const handleChange= (e) => {
    setcurrentExerSelect({...currentExerSelect,['ex_id']:e.target.value.id,['exercice']:e.target.value});
  };

  const addExerToWorkout=(e) =>{
    if(!currentExerSelect.ex_id){
      setalertErrorVisible(true)
      setTimeout(() => {
        setalertErrorVisible(false)
      }, 2000);
    }else{
      if(currentExerSelect.sets == undefined){
        setcurrentExerSelect({...currentExerSelect,['sets']:0})
      }
      if(!currentExerSelect.reps){
        setcurrentExerSelect({...currentExerSelect,['reps']:0})
      }
      if(!currentExerSelect.duration){
        setcurrentExerSelect({...currentExerSelect,['duration']:0})
      }

      setExercicesSelected([...exercicesSelected,currentExerSelect])
      setcurrentExerSelect({'reps':0,'duration':0,'sets':0})
      setnoexers(false)
      handleClose()
    }

  }

  return (
    <StylesProvider injectFirst>
      {
        loading?
          <Loading/>
        :
          error?
            "Ha ocurrido un error al insertar el entrenamiento, vuelva a intentarlo de aqui unos minutos."
          :
            <div className="workout_create">
              <div className="imagen_workout">
                <img src={workout_image} alt="" onError={onError}/>
              </div>
            <form className="workout_create_form" noValidate onSubmit={handleSubmit}>
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
                onChange={(e) => setWorkoutName(e.target.value)}
                value={workout_name}
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
              onChange={(e) => setWorkoutDesc(e.target.value)}
              value={workout_desc}
            />
            <div className="ejercicios_div">
              <div className="ejercicios_div_exers">
                {
                  exercicesSelected?
                  exercicesSelected.map((exercice) => {
                      return<div className="difficultie_preview" key={exercice.ex_id} value={exercice.ex_id}>
                        <img src={exercice.exercice.image} alt="" onError={onError} />
                        <div className="textos_difficulties">
                          <span>{exercice.exercice.name}</span>
                        </div>
                        <div className="textos_difficulties_dos">
                          <span>Sets: {exercice.sets}</span>
                          <span>Reps: {exercice.reps}</span>
                          <span>Dur: {exercice.duration}</span>
                        </div>
                        
                      </div>
                  })
                :
                "No hay ejercicios seleccionados..."}
                {
                  noexers?
                  "No hay ejercicios seleccionados..."
                  :
                  null
                }
              </div>
              <Button
                variant="contained"
                color="secondary"
                className="add_btn"
                onClick={openModalExers}
              >
                Añadir Ejercicios
              </Button>
            </div>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="image"
              label="Image"
              name="image"
              autoComplete="image"
              onChange={(e) => setWorkoutImage(e.target.value)}
              value={workout_image}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit_btn"
            >
              Nuevo Entrenamiento
            </Button>
            </form>
          </div>
      }

      <Dialog fullWidth maxWidth={"md"} open={modalVisible} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir ejercicios</DialogTitle>
        <DialogContent>
          <InputLabel id="exercice_select_label">Ejercicio</InputLabel>
          <small className="exerexplic">Solo aparecen los ejercicios que tengas en favoritos.</small>
          <Select
            labelId="exercice_select_label"
            id="exercice_select"
            className="exercice_select"
            fullWidth
            value={currentExerSelect.ex_id}
            onChange={handleChange}
            input={<Input />}>
              {
              //solo si el ejercicio lo tienes en favoritos
              exercices?
              exercices.map((exercice) => {
                if(exercice.favorited){
                  return<MenuItem key={exercice.id} value={exercice}>{exercice.name}</MenuItem>
                }
              })
            :
            null}
          </Select>
          <div className="exercice_props">
            <TextField
              variant="outlined"
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              fullWidth
              id="reps"
              label="Reps"
              name="reps"
              autoComplete="reps"
              onChange={(e) => setcurrentExerSelect({...currentExerSelect,['reps']:e.target.value})}
              value={currentExerSelect.reps}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="number"
              fullWidth
              id="sets"
              label="Sets"
              name="sets"
              autoComplete="sets"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              onChange={(e) => setcurrentExerSelect({...currentExerSelect,['sets']:e.target.value})}
              value={currentExerSelect.sets}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              fullWidth
              id="duration"
              label="Duration"
              name="duration"
              autoComplete="duration"
              onChange={(e) => setcurrentExerSelect({...currentExerSelect,['duration']:e.target.value})}
              value={currentExerSelect.duration}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={addExerToWorkout} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
      <MSalert visible={alertErrorVisible} text="No has seleccionado ningún ejercicio" type="error"></MSalert>
      <MSalert visible={error} text="Fallo al crear el entrenamiento" type="error"></MSalert>
      <MSalert visible={ok} text="Entrenamiento creado con exito" type="success"></MSalert>
    </StylesProvider>


  );
};

export default CreateWorkout;
