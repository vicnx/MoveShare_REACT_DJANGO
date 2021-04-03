import React from "react";
import "./exercice-details.css";
import Fav from "./fav/fav";


export default function ExerciceDetail({exercice}) {
  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }
  console.log(exercice);
  return (
    <>
      <div class="modal exercice-details">
        <i class="far fa-times-circle close-modal"></i>
        <div class="modal-left-side">
          <img src={exercice.image} alt="exercice img" onError={onError}/>
        </div>
        <div class="modal-right-side">
          <h1>{exercice.name}</h1>

          <div class="categories-list">
            {
              exercice.categories.map((category,index) =>
              <span>{category.name}</span>
            )
            }
          </div>
          <br />
          <h2>Description</h2>
          <p>
            {exercice.description}
          </p>
          <div class="options">
            {/* <button class="btn-fav" :class="this.exercice.favorited ? 'favorited':''" @click="favExercice">
              <i class="far fa-heart"></i>
            </button> */}
            <Fav
              className="btn-fav"
              id="1"
            ></Fav>
            <button
              class="btn-delete"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
