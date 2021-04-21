import React, { useState, useEffect,useContext } from "react";
import UserContext from "../../context/UserContext";
import useUser from '../../hooks/useUser'
import "./exercice-details.css";
import Fav from "./fav/fav";
import Remove from './remove/remove'
import { Card, Button, Avatar, Chip ,Paper,Divider} from "@material-ui/core";

// import ExercicesService from "../../services/exercices.service";

import {useExercice} from '../../hooks/useExercice'


import { useHistory } from "react-router-dom";

// RODAL MODAL
import Rodal from 'rodal';
import '../../../node_modules/rodal/lib/rodal.css';

export default function ExerciceDetail({exercice,visibleModal,setvisibleModal}) {
  const { user } = useContext(UserContext);
  const {deleteExercice} = useExercice(false);
  const {checkOwner} = useUser();
  let history = useHistory();


  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }
  const goToProfile = (e)=>{
    history.push('@'+exercice.author.username)
  }

  const closeModal=()=>{
    setvisibleModal(false)
  }
  return (
    <>
    <Rodal visible={visibleModal} onClose={closeModal} className="modalrodal">
      <div className="ex_details">
        <div className="ex_details_left">
          <img className="ex_image" src={exercice.image} alt="exercice img" onError={onError}/>
        </div>
        <div className="ex_details_right">
          <h1>{exercice.name}</h1>
          <div className="ex_details_right_content">
            <div className="ex_details_right_content_desc">
              <p>
                {exercice.description}
              </p>
            </div>
            <div className="ex_details_right_content_categories">
              {
                exercice.categories.map((category,index) =>
                <Chip className="category_modal" label={category.name} color="primary"/>
              )
              }
            </div>

          </div>
          <div className="ex_details_right_footer">
            <div className="ex_details_right_footer_author">
              <Chip avatar={<Avatar alt={exercice.author.username} src={exercice.author.image} />} label={exercice.author.username} onClick={goToProfile}/>

            </div>
            <div className="ex_details_right_footer_options">
              {
                checkOwner(exercice.author.username)
                ?
                <div className="options_modal_author">
                  <Remove exercice={exercice}/>
                  <Button color="primary">
                    MODIFICAR
                  </Button>
                  <Fav
                    className="btn-fav"
                    exercice={exercice}
                  ></Fav>
                </div>
                :
                <Fav
                  className="btn-fav"
                  exercice={exercice}
                ></Fav>
              }
            </div>
          </div>
        </div>
      </div>

      </Rodal>
    </>
  );
}
