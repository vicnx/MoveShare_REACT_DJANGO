import { useContext, useEffect, useState, useCallback } from "react";
import ExercicesContext from "../context/ExercicesContext";
import ExercicesService from "../services/exercices.service";

export function useExercices({ params } = { params: null }, refresh) {
  const [loading, setLoading] = useState(false);
  // const [categories, setCategories] = useState([]);
  const { exercices, setExercices } = useContext(ExercicesContext);
  const { categories, setCategories } = useContext(ExercicesContext);

  //el parametro refresh se ha introducido debido a un bug que hay que cada vez que le paso params los cambia, entonces provoca un bucle infinito. 
  //A refresh se le pasa el username, el limit o algo que al cambiar tengo que actualizar la lista y asi funciona correctamente y no hace bucle infinito.S
  useEffect(
    function () {
      setLoading(true);
      ExercicesService.query(params).then(({ data }) => {
        setExercices(data.results);
        console.log(exercices);
        setLoading(false);
      });
      ExercicesService.getCategories().then(({data})=>{
        setCategories(data.results)
        console.log(categories);
        setLoading(false);
      })
    },
    [refresh]
  );

  // const getCategories = useCallback(

  // ); 
  // const getCategories = useCallback(() => {
  //   setLoading(true);
  //   ExercicesService.getCategories().then(({data})=>{
  //     console.log(data.results);
  //     setCategories(data.results)
  //     setLoading(false);
  //   })
  // }, [refresh]);

  const newExercice = useCallback(
    (exercice) =>{
      setLoading(true);
      ExercicesService.create(exercice).then(({data})=>{
        console.log(data);
        setLoading(false);
      })
    }
  )



  return {
    loading: loading,
    exercices: exercices,
    castegories: categories,
    newExercice,
  };
}
