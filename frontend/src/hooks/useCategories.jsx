import { useContext, useEffect, useState, useCallback } from "react";
import ExercicesContext from "../context/ExercicesContext";
import CategoriesService from "../services/categories.service";
import { useHistory } from "react-router-dom";


export function useCategories(refresh) {
  const [loading, setLoading] = useState(false);
  const { categories, setCategories } = useContext(ExercicesContext);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
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
          // window.location.reload();
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
        // window.location.reload();
        setLoading(false);
      }, 1000);
    })
  })
  const updateCategory = useCallback((category) =>{
    CategoriesService.update(category).then(({data}) =>{
      setError(false)
      setOk(true)
      setTimeout(() => {
        setOk(false)
        // window.location.reload();
        setLoading(false);
      }, 1000);
    })
  })
  return {
    loading: loading,
    categories,
    createCategory,
    deleteCategory,
    updateCategory,
    ok,
    error,
    setError,
    setOk
  };
}
