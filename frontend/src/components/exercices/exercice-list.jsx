import React from "react";
import "./exercice-list.css";
import ExercicePreview from "./exercice-preview"

export default function ExerciceList({exercices,type=null, callBack}) {
  const checkType=()=>{
    if(type=="profile"){
      return "list_exercices_profile"
    }
    return "list_exercices"
  }
  console.log(exercices);
  return (
    <div className={checkType()}>
      {
        exercices.map((exercice,index) =>
          <ExercicePreview
            key={index}
            exercice={exercice}
            type={type}
            callBack={callBack}
          />
        )
      }
    </div>
  );
}
