import { useContext, useEffect, useState, useCallback } from "react";
import ExercicesContext from "../context/ExercicesContext";
import ExercicesService from "../services/exercices.service";

export function useExercice({ params } = { params: null }, refresh) {
  const [loading, setLoading] = useState(false);
  

  const deleteExercice = useCallback(
    (exercice) => {
      setLoading(true);
      ExercicesService.destroy(exercice.slug).then(({data})=>{
        console.log(data);
        setLoading(false);
      })
    }
  )



  return {
    loading: loading,
    deleteExercice
  };
}
