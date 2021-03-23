import React, { useContext,useEffect } from 'react';
import { Route, Redirect,useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import useUser from "../../hooks/useUser";



const PrivateRoute = ({component: Component, ...rest}) => {
  const { isLoggedSimple,isLogged,isLogginLoading } = useUser();
  let history = useHistory();

  //se ejecuta cuando cambia el estado de loading o logged
  useEffect(() => {
    //comprobamos si el login esta cargando ya que tarda un poco en obtener el user y desppues comprobamos si no esta logeado
    if(!isLogginLoading){
      if(!isLogged){
        history.push("/login");
      }
    }
  }, [isLogged,isLogginLoading]);


    return (
        <Route {...rest} render={props => (
          //Usamos el logged simple que solo verifica que haya un jwt token
          isLoggedSimple
            ? <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;