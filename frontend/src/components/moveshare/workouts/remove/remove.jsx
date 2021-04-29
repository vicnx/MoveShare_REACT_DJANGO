import React, { useState } from "react";
import {useWorkout} from 'hooks/useWorkout'
import DeleteIcon from '@material-ui/icons/Delete';
import MSalert from 'components/moveshare/alerts/alert'
import { Button } from "@material-ui/core";
import useUser from 'hooks/useUser'
import { StylesProvider } from "@material-ui/core/styles";


import "./remove.css";

export default function RemoveWorkout({ workout,callBack }) {
  const {checkOwner} = useUser();

  const {deleteWorkout,ok} = useWorkout();
  const [modalVisible, setModalVisible] = useState(false);

  const removeWorkout= (e)=>{
    deleteWorkout(workout)
  }
  return (
    <StylesProvider injectFirst>

    <>

    {
      checkOwner(workout.author.username) ?
      <Button className="boton_workout_delete" color="secondary" onClick={removeWorkout}>
          ELIMINAR <DeleteIcon />
      </Button>
      :
      null
    }

      <MSalert visible={ok} text="Entrenamiento eliminado con exito" type="success"></MSalert>
    </>
    </StylesProvider>

  );
}
