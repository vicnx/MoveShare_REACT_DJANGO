import React, {useState} from 'react'

const Context = React.createContext({})

export function WorkoutsContextProvider ({children}) {
  const [workouts, setWorkouts] = useState([])

  return <Context.Provider value={{workouts, setWorkouts}}>
    {children}
  </Context.Provider>
}

export default Context