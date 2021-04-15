import React from "react";
import {
  Container,
} from "@material-ui/core";
import ExerciceList from "../../components/exercices/exercice-list";
import {useExercices} from '../../hooks/useExercices'


export default function Exercices() {
  const {exercices,refreshExercices} = useExercices();
  return (
      <Container className="home">

          {
              <ExerciceList exercices={exercices} callBack={refreshExercices} />
            
          }
      </Container>
  );
}
