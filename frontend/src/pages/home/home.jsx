import React, {useContext} from "react";
import {
  Paper,
  Typography,
  Container,
} from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import "./home.css";
import ExerciceList from "../../components/exercices/exercice-list";
import {useExercices} from '../../hooks/useExercices'
import Banner from '../../components/banner_page/banner'


export default function Home() {
  const params={
    filters: {
      limit: 4
    }
  }
  const {exercices,refreshExercices} = useExercices({params});
  return (
    <>
    <StylesProvider injectFirst>
      <Banner page="HOME"/>
      <Container className="home">

        <Paper elevation={3} className="paper-top-ejercicios">
          <Typography variant="h5" className="home-title">
            Top Ejercicios
          </Typography>
          <ExerciceList exercices={exercices} callBack={refreshExercices}/>
        </Paper>
      </Container>
    </StylesProvider>

      </>
  );
}
