import './dashboard.css'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';
// import EditUserModal from './EditUser/admin.editUsers';
import ModalCategory from 'components/panel_admin/categories/ModalCategory'
import CategoriesService from "services/categories.service";
import AddIcon from '@material-ui/icons/Add';
import Loading from 'react-simple-loading';
import {useCategories} from 'hooks/useCategories'
import useUser from 'hooks/useUser'
import MSalert from 'components/alerts/alert'
import Counter from 'components/panel_admin/dashboard/Counter'
import {UserService} from 'services/user.service.jsx'
import GroupIcon from '@material-ui/icons/Group';






const DashBoard = () => {
    const {deleteCategory,ok,error,setError} = useCategories(false)
    const {getListUsers} = useUser(false)
    const [ allusers, setAllUsers ] = useState([]);





    useEffect(() => {
      UserService.getListUsers().then((data)=>{
        setAllUsers(data.data.results)
      })

    }, [])

    return (
      <>
      <div className="counter_list">
        <Counter count={allusers.length} text={"USUARIOS"} icono={<GroupIcon/>} color="blue"/>
        <Counter count={allusers.length} text={"USUARIOS"} icono={<GroupIcon/>} color="green"/>
        <Counter count={allusers.length} text={"USUARIOS"} icono={<GroupIcon/>} color="red"/>
        <Counter count={allusers.length} text={"USUARIOS"} icono={<GroupIcon/>} color="blue"/>
        <Counter count={allusers.length} text={"USUARIOS"} icono={<GroupIcon/>} color="blue"/>
      </div>

      </>

    )
}

export default DashBoard