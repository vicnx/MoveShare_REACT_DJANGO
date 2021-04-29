import { useCallback, useContext, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "context/UserContext";
import loginService from "services/login";
import registerService from "services/register";
import {saveToken,destroyToken,getToken} from 'services/jwt.service'
import {UserService} from 'services/user.service'
import {ApiService} from 'services/api.service'


export default function useUser() {
  const { jwt, setJWT } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [ state, setState ] = useState({ loading: false, error: false, loadingUser: true});
  const [ errorMSG, setErrorMSG ] = useState("")
  const {admin,setAdmin} = useContext(UserContext);

  const login = useCallback(
    (email, password) => {
      setState({ loading: true, error: false, loadingUser: true });
      loginService({ user: { email, password } })
        .then((data) => {
          if (data.errors){
            setState({loading:false,error:true, loadingUser: false})
            setErrorMSG(data.errors)
            destroyToken()
          }else{
            setState({loading:false,error:false, loadingUser: false})
            saveToken(data.token)
            setJWT(data.token);
            setUser(UserService.getUserData())
            window.location.reload();
          }
          
        })
        .catch((err) => {
          destroyToken()
          setState({loading:false,error:true, loadingUser: false})
        });
    },
    [setJWT]
  ); //cada vez que cambie setJWT la funcion login se vuelve a crear

  const register = useCallback(
    (email, password, username) => {
      setState({ loading: true, error: false,loadingUser: false });
      registerService({ user: { email, password, username } })
        .then((data) => {
          console.log(data);
          if (data.errors){
            setState({loading:false,error:true, loadingUser: false})
            setErrorMSG(data.errors)
            destroyToken()
          }else{
            setState({loading:false,error:false,loadingUser: false})
            saveToken(data.token)
            setJWT(data.token);
            setUser(UserService.getUserData())
            window.location.reload();
          }
        })
        .catch((err) => {
          destroyToken()
          setState({loading:false,error:true,loadingUser: false})
        });
    },
    [setJWT]
  ); 

  const updateUser = useCallback(
    (image, bio) => {
      setState({ loading: true, error: false });
      UserService.updateUserData({image,bio}).then((data)=>{
        window.location.reload()
      })
    },
    [setJWT]
  ); 

  const logout = useCallback(() => {
    destroyToken()
    setUser(null)
    setJWT(null);
  }, [setJWT]);

  const checkOwner = useCallback((username) => {

    if(username == user.username){
      return true
    }
    return false
  }, [setJWT]);

  const check_auth = () => {
    if(user){
      return true
    }
    return false
  }

  //only for render pages
  const isLoggedSimple = () =>{
      if (getToken()) {
          return true;
      }
      return false
  }


  // const getListUsers = useCallback(
  //   () => {
  //     console.log(UserService);
  //     setState({ loading: true, error: false });
  //     UserService.getListUsers().then((data)=>{
  //       console.log(data);
  //       return data.data.results
  //     })
  //   }
  // ); 

  return {
    isLogged: check_auth(),
    isLogginLoading : state.loading,
    hasLoginError: state.error,
    errors:errorMSG,
    login,
    logout,
    register,
    checkOwner,
    updateUser,
    isLoggedSimple: isLoggedSimple(),  
    loadingUser: state.loadingUser,
    admin,
    setAdmin,
    user: user
  };
}
