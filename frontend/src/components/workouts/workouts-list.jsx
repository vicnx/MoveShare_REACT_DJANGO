import React from "react";
import WorkoutPreview from "./workouts-preview"
import WorkoutPreviewProfile from "./workouts-preview-profile"

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
        type=="profile"?
          <WorkoutPreviewProfile
            key={index}
            workout={workout}
            type={type}
            callBack={callBack}
          />
          :
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
