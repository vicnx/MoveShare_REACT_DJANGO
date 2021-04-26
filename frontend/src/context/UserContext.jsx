import React, { useState } from "react";
import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from '../services/api.service'
const Context = React.createContext({});

export function UserContextProvider({ children }) {
  
  //funcion que intenta obtener su propio usuario con ese token (sirve para detectar tokens invalidos o expirados)
  const check_auth = () => {
    console.log("CHECKOUTIKJWDNK");
    if (getToken()) {
      ApiService.auth();
      ApiService.get("user")
      .then(({ data }) => {
        console.log(data);
        setUser(data.user)
        setJWT(data.user.token)
      })
      .catch(({ response }) => {
          destroyToken();
          window.location.reload();
        });
    } else {
      destroyToken();
    }
  }
  // por defecto se obtiene del localStorage (comprobando el login) le asignamos una funcion por si se vuelve a renderizar.
  const [jwt, setJWT] = useState(() => check_auth());
  const [user, setUser] =useState(null)
  const [admin, setAdmin] =useState(localStorage.getItem('admin'))



  return (
    <Context.Provider value={{ jwt, setJWT,user,setUser,admin, setAdmin }}>{children}</Context.Provider>
  );
}

export default Context;
