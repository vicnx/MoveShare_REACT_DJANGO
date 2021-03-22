import React, {useState} from 'react'

const Context = React.createContext({})

export function ExercicesContextProvider ({children}) {
  const [exercices, setExercices] = useState([])
  const [categories, setCategories] = useState([])

  return <Context.Provider value={{exercices, setExercices,categories,setCategories}}>
    {children}
  </Context.Provider>
}

export default Context