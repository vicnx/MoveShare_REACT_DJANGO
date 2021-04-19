import { useContext, useEffect, useState, useCallback } from "react";
import WorkoutsContext from "../context/WorkoutsContext";
import WorkoutsService from "../services/workouts.service";

export function useWorkout({ workoutid } = { workoutid: null }) {
  const [loading, setLoading] = useState(false);
  const { workout, setWorkout } = useContext(WorkoutsContext);

  useEffect(function () {
    setLoading(true)
    WorkoutsService.get(workoutid).then(({data}) =>{
      setWorkout(data)
      setLoading(false)
    })
  }, [workoutid])

  return {
    loading: loading,
    workout: workout,
  };
}
