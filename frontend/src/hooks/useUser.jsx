import { useCallback, useContext } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "../context/UserContext";
import loginService from "../services/login"
export default function useUser() {
  const { jwt, setJWT } = useContext(UserContext);

  const login = useCallback((email,password) => {
    loginService({ user: {email,password}}).then(data =>{
      if(data.error) alert(data.error)
      setJWT(data.token) 
    })
    .catch(err =>{
      console.error(err);
    })
  }, [setJWT]); //cada vez que cambie setJWT la funcion login se vuelve a crear

  const logout = useCallback(()=>{
    setJWT(null)
  },[setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  };
}
