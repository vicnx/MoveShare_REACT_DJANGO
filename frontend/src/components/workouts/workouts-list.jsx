import React from "react";
import WorkoutPreview from "./workouts-preview"

export default function WorkoutList({workouts,type=null, callBack}) {
  const checkType=()=>{
    if(type=="profile"){
      return "list_exercices_profile"
    }
    return "list_exercices"
  }
  console.log(workouts);
  return (
    <div className={checkType()}>
      {
        workouts.map((workout,index) =>
          <WorkoutPreview
            key={index}
            workout={workout}
            type={type}
            callBack={callBack}
          />
        )
      }
    </div>
  );
}
