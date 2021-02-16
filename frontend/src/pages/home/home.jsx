import React from "react";
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
import "./home.css";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 3),
  },
  card: {
    maxWidth: 345,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <StylesProvider injectFirst>
      <Container className="home">
        <Paper elevation={3} className="paper-top-ejercicios">
          <Typography variant="h5" className="home-title">
            Top Ejercicios
          </Typography>
        </Paper>
      </Container>
    </StylesProvider>
  );
}
