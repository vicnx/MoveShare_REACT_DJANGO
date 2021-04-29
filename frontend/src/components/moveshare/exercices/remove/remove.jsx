import React, { useState } from "react";
import {useExercice} from 'hooks/useExercice'
import DeleteIcon from '@material-ui/icons/Delete';
import MSalert from 'components/alerts/alert'
import { Button } from "@material-ui/core";

import "./remove.css";

export default function Remove({ exercice,callBack }) {
  const {deleteExercice} = useExercice(false);
  const [modalVisible, setModalVisible] = useState(false);

  const removeExercice = (e)=>{
    deleteExercice(exercice)
    setModalVisible(true)
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }
  return (
    <>
      <Button color="secondary" onClick={removeExercice}>
          ELIMINAR 
          <DeleteIcon />
      </Button>
      <MSalert visible={modalVisible} text="Ejercicio eliminado con exito" type="success"></MSalert>
    </>
  );
}
