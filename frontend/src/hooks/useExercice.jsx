import { useContext, useEffect, useState, useCallback } from "react";
import ExercicesContext from "../context/ExercicesContext";
import ExercicesService from "../services/exercices.service";
import { useHistory } from "react-router-dom";


export function useExercice({ params } = { params: null }, refresh) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [ok, setOk] = useState(false);
  let history = useHistory();
  
  const newExercice = useCallback(
    (exercice) =>{
      setLoading(true);
      ExercicesService.create(exercice).then(({data})=>{
        if(!data){
          setError(true)
          setLoading(false);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }else{
          setError(false)
          setOk(true)
          setTimeout(() => {
            setOk(false)
            history.push('/exercices/')
            window.location.reload();
            setLoading(false);
          }, 1000);
        }
        console.log(data);
        setLoading(false);
      })
    }
  )

  const deleteExercice = useCallback(
    (exercice) => {
      setLoading(true);
      ExercicesService.destroy(exercice.slug).then(({data})=>{
        setError(false)
        setOk(true)
        setTimeout(() => {
          setOk(false)
          setLoading(false);
        }, 1000);
      })
    }
  )

  const favExercice = useCallback(
    (exercice) => {
      setLoading(true);
      ExercicesService.favorite(exercice.slug).then(({data})=>{
        console.log(data);
        setLoading(false);
      })
    }
  )

  const unfavExercice = useCallback(
    (exercice) => {
      setLoading(true);
      ExercicesService.unfavorite(exercice.slug).then(({data})=>{
        console.log(data);
        setLoading(false);
      })
    }
  )



  return {
    loading: loading,
    deleteExercice,
    favExercice,
    unfavExercice,
    newExercice,
    error,
    ok
  };
}
