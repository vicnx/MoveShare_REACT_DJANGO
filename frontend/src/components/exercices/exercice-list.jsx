import React from "react";
import "./exercice-list.css";
import ExercicePreview from "./exercice-preview"

export default function ExerciceList({exercices}) {
  
  return (
    <div className="list_exercices">
      {
        exercices.map((exercice,index) =>
          <ExercicePreview
            key={index}
            exercice={exercice}
          />
        )
      }
    </div>
  );
}
