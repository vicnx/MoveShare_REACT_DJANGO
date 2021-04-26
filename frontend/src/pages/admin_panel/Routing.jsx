
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { useLocation } from 'react-router-dom'

import useUser from '../../hooks/useUser';
import PanelAdminMenu from '../../components/panel_admin/sidebar/PanelAdminMenu'
import './routing.css'

import Categories from "./Categories/categories";


const PanelAdminMain = () => {
    const { isLogged,user,loadingUser } = useUser()

    const location = useLocation();
    if(!loadingUser){
        if (user) {
          if (!user.is_staff) {
              window.localStorage.setItem('admin', false)
              window.location.reload()
          }
      }
    }


    return (
        <>
          {
            !user ? null :
                user.is_staff ?
                    <div className="AdminPanel">
                        <PanelAdminMenu/>
                        <div className="AdminPanelDiv">
                            <div className="HeaderTitle">
                                <h3 className="title">{location.pathname.substring(1)}</h3>
                            </div>
                            <div className="adminPage">
                                <Switch>
                                    <Route exact path="/dashboard">Estadisticas</Route>
                                    <Route exact path="/users">Usuarios</Route>
                                    <Route exact path="/categories"><Categories/></Route>
                                    <Redirect from='/admin' to='/dashboard' />
                                    <Redirect from='/' to='/dashboard' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                    : null
          }
        </>
    )
}

export default PanelAdminMain