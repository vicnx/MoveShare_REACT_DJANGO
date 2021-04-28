import React,{useState} from "react";
import {
  Container,
} from "@material-ui/core";
import ExerciceList from "../../../components/exercices/exercice-list";
import {useExercices} from '../../../hooks/useExercices'
import { useParams } from "react-router";
import {useCategories} from '../../../hooks/useCategories'
import Alert from '@material-ui/lab/Alert';

import './exercices.css'
import Loading from 'react-simple-loading';
import BackgroundSlider from 'react-background-slider'
import bg1 from '../../../common/images/backgrounds_app/bg_circle1.jpg';
import bg2 from '../../../common/images/backgrounds_app/bg_circle2.jpg';
import bg3 from '../../../common/images/backgrounds_app/bg_circle3.jpg';


export default function Exercices() {
  const {category} = useParams();
  const {categories} = useCategories(false)
  
  const params={
    filters: {
      category: category,
    },
  }
  const {exercices,refreshExercices,loading} = useExercices({params},category);

  return (
      <Container className="exercices_page">
      <BackgroundSlider images={[bg1,bg2,bg3]} duration={20} transition={1} />

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
            <ExerciceList exercices={exercices} callBack={refreshExercices} type={category ? "categories":null}/>

          }

      </Container>
  );
}
