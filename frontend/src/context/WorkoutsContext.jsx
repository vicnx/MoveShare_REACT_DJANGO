import React, {useState} from 'react'

const Context = React.createContext({})

export function WorkoutsContextProvider ({children}) {
  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState([])

  return <Context.Provider value={{workouts, setWorkouts,workout, setWorkout}}>
    {children}
  </Context.Provider>
}

export default Context