import React from "react";
import WorkoutPreview from "./workouts-preview"

export default function WorkoutList({workouts,type=null, callBack}) {
  const checkType=()=>{
    if(type=="profile"){
      return "list_workouts_profile"
    }
    return "list_workouts"
  }
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
