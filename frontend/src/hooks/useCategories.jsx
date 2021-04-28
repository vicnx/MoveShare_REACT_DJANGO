import { useContext, useEffect, useState, useCallback } from "react";
import ExercicesContext from "../context/ExercicesContext";
import CategoriesService from "../services/categories.service";
import { useHistory } from "react-router-dom";


export function useCategories(refresh) {
  const [loading, setLoading] = useState(false);
  const { categories, setCategories } = useContext(ExercicesContext);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
  let history = useHistory();


  //el parametro refresh se ha introducido debido a un bug que hay que cada vez que le paso params los cambia, entonces provoca un bucle infinito. 
  //A refresh se le pasa el username, el limit o algo que al cambiar tengo que actualizar la lista y asi funciona correctamente y no hace bucle infinito.S
  useEffect(
    function () {
      if(refresh){
        setLoading(true);
        CategoriesService.query().then(({data})=>{
          setCategories(data.results)
          setLoading(false);
        })
      }

    },
    [refresh]
  );

  const createCategory = useCallback((category) =>{
    CategoriesService.create({"name":category.name,"image":category.image}).then(({data}) =>{
      if(data){
        setError(false)
        setOk(true)
        setTimeout(() => {
          setOk(false)
          window.location.reload();
          setLoading(false);
        }, 1000);
      }else{
        setError(true)
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    })
  })
  const deleteCategory = useCallback((idcategory) =>{
    CategoriesService.destroy(idcategory).then(({data}) =>{
      setError(false)
      setOk(true)
      setTimeout(() => {
        setOk(false)
        window.location.reload();
        setLoading(false);
      }, 1000);
    })
  })


  return {
    loading: loading,
    categories,
    createCategory,
    deleteCategory,
    ok,
    error,
    setError,
    setOk
  };
}
