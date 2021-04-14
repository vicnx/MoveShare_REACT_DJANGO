import React, { useState, useEffect,useContext } from "react";
import UserContext from "../../context/UserContext";
import useUser from '../../hooks/useUser'
import "./exercice-details.css";
import Fav from "./fav/fav";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Remove from './remove/remove'
// import ExercicesService from "../../services/exercices.service";

import {useExercice} from '../../hooks/useExercice'


import { useHistory } from "react-router-dom";

// RODAL MODAL
import MSalert from '../alerts/alert'

export default function ExerciceDetail({exercice}) {
  const { user } = useContext(UserContext);
  const {deleteExercice} = useExercice(false);
  const {checkOwner} = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  let history = useHistory();


  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }
  const goToProfile = (e)=>{
    history.push('@'+exercice.author.username)
  }

  const closeModal=()=>{
    setModalVisible(false)
  }

  // const removeExercice = (e)=>{
  //   deleteExercice(exercice)
  //   setModalVisible(true)
  //   setTimeout(() => {
  //     window.location.reload()
  //   }, 2000);
  // }

  console.log(exercice);
  return (
    <>
      <div className="modal exercice-details">
        <i className="far fa-times-circle close-modal"></i>
        <div className="modal-left-side">
          <img className="exer_image" src={exercice.image} alt="exercice img" onError={onError}/>
          <div className="modal_left_side_content">
            <div className="modal_author">
              <Chip avatar={<Avatar alt={exercice.author.username} src={exercice.author.image} />} label={exercice.author.username} onClick={goToProfile}/>
            </div>
            {
              checkOwner(exercice.author.username)
              ?
              <div className="options_modal_author">
                <Remove exercice={exercice}/>
                <button
                  className="btn-mod">
                    MODIFICAR 
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              :
              false
            }
          </div>

        </div>
        <div className="modal-right-side">
          <h1>{exercice.name}</h1>

          <div className="categories-list">
            {
              exercice.categories.map((category,index) =>
              <Chip className="category_modal" label={category.name} color="primary"/>
            )
            }
          </div>
          <br />
          <h2>Description</h2>
          <p>
            {exercice.description}
          </p>
          <div className="options">
            <Fav
              className="btn-fav"
              exercice={exercice}
            ></Fav>
          </div>
        </div>
      </div>
    </>
  );
}
