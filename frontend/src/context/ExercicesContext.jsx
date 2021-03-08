import React, {useState} from 'react'

const Context = React.createContext({})

export function ExercicesContextProvider ({children}) {
  const [exercices, setExercices] = useState([])

  return <Context.Provider value={{exercices, setExercices}}>
    {children}
  </Context.Provider>
}

export default Context