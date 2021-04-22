import { useContext, useEffect, useState, useCallback } from "react";
import WorkoutsContext from "../context/WorkoutsContext";
import WorkoutsService from "../services/workouts.service";
import { useHistory } from "react-router-dom";


export function useWorkout({ workoutid } = { workoutid: null }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [created, setCreated] = useState(false);
  const { workout, setWorkout } = useContext(WorkoutsContext);
  let history = useHistory();


  useEffect(function () {
    if(workoutid){
      setLoading(true)
      WorkoutsService.get(workoutid).then(({data}) =>{
        setWorkout(data)
        setLoading(false)
      })
    }
  }, [workoutid])

  const newWorkout = useCallback(
    (workout) =>{
      var workoinsert = JSON.parse(JSON.stringify(workout));
      workoinsert['difficulties'].map((e)=>{
        delete e.exercice 
        return e
      })
      setLoading(true);
      setError(false)
      WorkoutsService.create(workoinsert).then(({data})=>{
        if(!data){
          setError(true)
          setLoading(false);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }else{
          setError(false)
          setCreated(true)
          setTimeout(() => {
            setCreated(false)
            history.push('/workout/'+data.slug)
            setLoading(false);
          }, 1000);
        }
      })
    }
  )

  return {
    loading: loading,
    workout: workout,
    newWorkout,
    error:error,
    created:created
  };
}
