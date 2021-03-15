import React, {useState} from 'react'

const Context = React.createContext({})

export function ProfileContextProvider ({children}) {
  const [profile, setProfile] = useState([])

  return <Context.Provider value={{profile, setProfile}}>
    {children}
  </Context.Provider>
}

export default Context