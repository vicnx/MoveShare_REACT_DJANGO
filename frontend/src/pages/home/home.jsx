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
import HomeImage from '../../common/images/personal_training.svg'
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";
import HomeCategories from '../../components/home/categories'



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
      {/* <Banner page="HOME"/> */}
      <div className="home_div">
        <div className="home_pre">
          <div className="home_pre_columns">
            <div className="home_pre_text_div">
              <div className="home_pre_tex">
                <span className="title">MoveShare</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius erat a rhoncus elementum. Mauris a felis luctus, tincidunt turpis vitae, tempor mi. Suspendisse est dui, dictum at scelerisque nec, convallis sed odio. Phasellus ut tortor fermentum tellus imperdiet malesuada vulputate eget nisi. Etiam eleifend rutrum consequat. Quisque non ex et risus mattis interdum porttitor porta ante.</p>
                <div className="home_pre_tex_options">
                  <Button type="submit" variant="outlined" color="primary" className="workouts_btn" to={'/workouts'} component={Link}>
                    VER ENTRENAMIENTOS
                  </Button>
                </div>
              </div>
            </div>

            <div className="home_pre_image">
              <img src={HomeImage}/>
            </div>
          </div>
        </div>
        <div className="home_best_categories">
          <span>CATEGORIAS POPULARES</span>
          <HomeCategories quantity="4"/>
        </div>
      </div>
    </StylesProvider>

      </>
  );
}
