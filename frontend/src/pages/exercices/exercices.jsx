import React from "react";
import {
  Container,
} from "@material-ui/core";
import ExerciceList from "../../components/exercices/exercice-list";
import {useExercices} from '../../hooks/useExercices'
import { useParams } from "react-router";



export default function Exercices() {
  const {exercices,refreshExercices} = useExercices();
  const {category} = useParams();
  let arr= []


  if(category){
    exercices.filter(exercice=>{
      exercice.categories.map((cat)=>{
        console.log(cat.id);
        console.log(category);
        if(cat.id==category){
          console.log("hola");
          arr.push(exercice)
        }
      })
    })
    console.log(arr);
  }else{
    arr = exercices
  }

  return (
      <Container className="home">

          {
              <ExerciceList exercices={arr} callBack={refreshExercices} />
            
          }
      </Container>
  );
}
