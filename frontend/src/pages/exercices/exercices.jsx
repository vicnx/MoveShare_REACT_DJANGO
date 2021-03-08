import React, {useContext} from "react";
import Context from '../../context/appContext'
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Container,
} from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import ExercicePreview from "../../components/exercices/exercice-preview";
import ExerciceList from "../../components/exercices/exercice-list";
import {useExercices} from '../../hooks/useExercices'


export default function Exercices() {
  const {exercices} = useExercices();
  return (
      <Container className="home">

          {
              <ExerciceList exercices={exercices} />
            
          }
      </Container>
  );
}
