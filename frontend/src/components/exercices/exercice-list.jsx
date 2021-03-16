import React from "react";
import "./exercice-list.css";
import ExercicePreview from "./exercice-preview"

export default function ExerciceList({exercices,type=null}) {
  console.log(type);

  const checkType=()=>{
    if(type=="profile"){
      return "list_exercices_profile"
    }
    return "list_exercices"
  }

  return (
    <div className={checkType()}>
      {
        exercices.map((exercice,index) =>
          <ExercicePreview
            key={index}
            exercice={exercice}
            type={type}
          />
        )
      }
    </div>
  );
}
