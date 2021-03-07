import { useCallback, useContext, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "../context/UserContext";
import loginService from "../services/login";
import {saveToken,destroyToken,getToken} from '../services/jwt.service'
import getUserData from '../services/user.service'
import {ApiService} from '../services/api.service'


export default function useUser() {
  const { jwt, setJWT } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [ state, setState ] = useState({ loading: false, error: false });
  const [ errorMSG, setErrorMSG ] = useState("")

  const login = useCallback(
    (email, password) => {
      setState({ loading: true, error: false });
      loginService({ user: { email, password } })
        .then((data) => {
          // setState({loading:false,error:false})
          if (data.errors){
            setState({loading:false,error:true})
            setErrorMSG(data.errors)
            destroyToken()
          }else{
            setState({loading:false,error:false})
            saveToken(data.token)
            setJWT(data.token);
            setUser(getUserData())
            console.log(user);
          }
          
        })
        .catch((err) => {
          destroyToken()
          setState({loading:false,error:true})
        });
    },
    [setJWT]
  ); //cada vez que cambie setJWT la funcion login se vuelve a crear

  const logout = useCallback(() => {
    destroyToken()
    setUser(null)
    setJWT(null);
  }, [setJWT]);

  const check_auth = () => {
    if(user){
      return true
    }
    return false
  }

  return {
    isLogged: check_auth(),
    isLogginLoading : state.loading,
    hasLoginError: state.error,
    errors:errorMSG,
    login,
    logout,
  };
}
