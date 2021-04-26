import CategoryIcon from '@material-ui/icons/Category';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './PanelAdminMenu.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import logo from '../../../common/images/logo_white_large.png'


const PanelAdminMenu = () => {
    const location = useLocation();
    const currentPage = location.pathname
    const ExitAdminPanel = (e)=>{
        window.localStorage.removeItem('admin')
        window.location.reload()
    }
    return (
        <>
            <section className="sidebar">
                <div className="sidebarHeader">
                    <img className="sidebarLogo" src={logo} alt=""/>
                    <h3>Panel Administrador</h3>
                </div>
                <nav className="sidebarNav">
                  <div className="sidebarOpciones">
                      <Link to={"/dashboard"} className={"nav-item " + (currentPage === "/dashboard" ? " active": "")}>
                          <DashboardIcon /> Dashboard
                      </Link>

                      <Link to={"/users"} className={"nav-item " + (currentPage === "/users" ? " active": "")}>
                          <GroupIcon /> Usuarios
                      </Link>

                      <Link to={"/categories"} className={"nav-item " + (currentPage === "/categories" ? " active": "")}>
                          <CategoryIcon /> Categorias
                      </Link>

                      <Link to={"/exercices"} className={"nav-item " + (currentPage === "/exercices" ? " active": "")}>
                          <ShoppingBasketIcon /> Ejercicios
                      </Link>
                      <Link to={"/workouts"} className={"nav-item " + (currentPage === "/workouts" ? " active": "")}>
                          <FitnessCenterIcon /> Entrenamientos
                      </Link>
                      <Link onClick={ExitAdminPanel} className={"nav-item " + (currentPage === "/exit" ? " active": "")}>
                          <ExitToAppIcon /> Salir
                      </Link>
                  </div>
                </nav>
            </section>
        </>)
}

export default PanelAdminMenu