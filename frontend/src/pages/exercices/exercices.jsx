import React,{useState} from "react";
import {
  Container,
} from "@material-ui/core";
import ExerciceList from "../../components/exercices/exercice-list";
import {useExercices} from '../../hooks/useExercices'
import { useParams } from "react-router";
import {useCategories} from '../../hooks/useCategories'
import Alert from '@material-ui/lab/Alert';

import './exercices.css'
import Loading from 'react-simple-loading';



export default function Exercices() {
  const {category} = useParams();
  const {categories} = useCategories(false)
  
  const params={
    filters: {
      category: category,
    },
  }
  const {exercices,refreshExercices,loading} = useExercices({params},category);



  // if(category){
  //   exercices.filter(exercice=>{
  //     exercice.categories.map((cat)=>{
  //       console.log(cat.id);
  //       console.log(category);
  //       if(cat.id==category){
  //         console.log("hola");
  //         arr.push(exercice)
  //       }
  //     })
  //   })
  //   console.log(arr);
  // }else{
  //   arr = exercices
  // }

  return (
      <Container className="home">

          {
            category ?
            <div className="Cat_filter">
              <h1>{categories.filter(c => c.id==category)[0] ? categories.filter(c => c.id==category)[0].name : "Categoria Desconocida" }</h1>
              <small className="">Solo se muestras los ejercicios filtrados por la categoria indicada</small>
            </div>

            :
            null
          }
          {
            loading ?
            <Loading/>
            :
            exercices.length < 1 ?
            <div className="error_exercices">
              <Alert severity="error">No hay ejercicios disponibles</Alert>

            </div>
            
            :
            <ExerciceList exercices={exercices} callBack={refreshExercices} />

          }

      </Container>
  );
}
