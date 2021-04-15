import React, { useEffect } from 'react';
import { Route, Redirect,useHistory } from 'react-router-dom';
import useUser from "../../hooks/useUser";



const PrivateRoute = ({component: Component, ...rest}) => {
  const { isLoggedSimple,isLogged,loadingUser } = useUser();
  let history = useHistory();

  //se ejecuta cuando cambia el estado de loading o logged
  useEffect(() => {
    //comprobamos si el login esta cargando ya que tarda un poco en obtener el user y desppues comprobamos si no esta logeado
    if(!loadingUser){
      if(!isLogged){
        history.push("/login");
      }
    }
  }, [isLogged,loadingUser]);


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