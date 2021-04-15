import { useContext, useEffect, useState, useCallback } from "react";
import WorkoutsContext from "../context/WorkoutsContext";
import WorkoutsService from "../services/workouts.service";

export function useWorkouts({ params } = { params: null }, refresh) {
  const [loading, setLoading] = useState(false);
  const { workouts, setWorkouts } = useContext(WorkoutsContext);
  useEffect(
    function () {
      console.log("HOOK WORKOUTS");
      setLoading(true);
      WorkoutsService.query(params).then(({ data }) => {
        setWorkouts(data.results);
        console.log(workouts);
        setLoading(false);
      });
    },
    [refresh]
  );

  return {
    loading: loading,
    workouts: workouts,
  };
}
