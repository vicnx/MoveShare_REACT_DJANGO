import React, { useState } from "react";
import {getToken} from '../services/jwt.service'
const Context = React.createContext({});

export function UserContextProvider({ children }) {
  // por defecto se obtiene del localStorage le asignamos una funcion por si se vuelve a renderizar.
  const [jwt, setJWT] = useState(() => getToken());

  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
}

export default Context;
