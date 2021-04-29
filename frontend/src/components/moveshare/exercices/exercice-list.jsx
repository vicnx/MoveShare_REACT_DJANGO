import React from "react";
import "./exercice-list.css";
import ExercicePreview from "./exercice-preview"
import ExercicePreviewProfile from "./exercice-preview-profile"

export default function ExerciceList({exercices,type=null, callBack}) {
  const checkType=()=>{
    if(type=="profile"){
      return "list_exercices_profile"
    }else if(type=="categories"){
      return "list_exercices_categories"
    }else{
      return "list_exercices"
    }
  }
  console.log(exercices);
  return (
    <div className={checkType()}>
      {
        
        exercices.map((exercice,index) =>
          type=="profile"?
          <ExercicePreviewProfile
            key={index}
            exercice={exercice}
            type={type}
            callBack={callBack}
          />
          :
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
