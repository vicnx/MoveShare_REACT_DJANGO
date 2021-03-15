import {useContext, useEffect, useState} from 'react'
import ExercicesContext from "../context/ExercicesContext";
import ExercicesService from '../services/exercices.service'


export function useExercices({params} = {params:null}){
  const [loading, setLoading] = useState(false)
  const {exercices, setExercices} = useContext(ExercicesContext)
  useEffect(function () {
    setLoading(true)
    ExercicesService.query(params).then(({data}) =>{
      
      setExercices(data.results)
      setLoading(false)
    })
  }, [])


  return {
    loading : loading,
    exercices:exercices
  };
}