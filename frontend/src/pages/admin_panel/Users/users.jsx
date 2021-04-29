import './users.css'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';
// import EditUserModal from './EditUser/admin.editUsers';
import ModalCategory from 'components/panel_admin/categories/ModalCategory'
import CategoriesService from "services/categories.service";
import {UserService} from "services/user.service";
import AddIcon from '@material-ui/icons/Add';
import Loading from 'react-simple-loading';
import {useCategories} from 'hooks/useCategories'
import MSalert from 'components/alerts/alert'





const Users = () => {
    // const {deleteCategory,ok,error,setError} = useCategories(false)

    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true)
    const [usersAdmin, setusersAdmin] = useState([])
    const [loading, setLoading] = useState(true)

    const [ModalCategoryOpen, setModalCategoryOpen] = useState(false)
    const [ModalCategoryType, setModalCategoryType] = useState("create")
    const [errorText, seterrorText] = useState("No se ha podido eliminar la categoria, intentelo de nuevo.");
    let idCounter = 0;
    function addIDToItems(item) {
      item.id = idCounter++;
      setusersAdmin(usersAdmin => [...usersAdmin, item]);
    }
    useEffect(() => {
      UserService.getListUsers().then(({data})=>{
        data.results.forEach(user => addIDToItems(user));
        setLoading(false);
      })
    }, [])


    const columns = [

        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Usuario', width: 170 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'is_staff', headerName: 'Admin', width: 100 },
        { field: 'image', headerName: 'Imagen', flex: 1 },
        {
          field: 'edit',
          headerName: 'Editar',
          description: 'This column is not sortable.',
          sortable: false,
          width: 100,
          renderCell: () => {
              return (<Button className="btn" variant="outlined" color="primary" size="small" onClick={handleOpenModal}><EditIcon /></Button>)
          },
      },
        {
            field: 'delete',
            headerName: 'Borrar',
            description: 'This column is not sortable.',
            sortable: false,
            width: 100,
            renderCell: (params) => {
                return (<Button className="btn" variant="outlined" color="secondary" size="small" onClick={()=>{console.log(params.id)}}><DeleteIcon /></Button>)
            },
        },
    ];

    return (
        <>
            {
                loading ? <Loading/> :
                <>
                  {/* <div className="optionsUsers">
                    <Button className="btn-options" variant="outlined" color="default" size="small" onClick={(e)=>{setModalCategoryOpen(true);setModalCategoryType("create")}}>Nueva Categoria</Button>
                  </div> */}
                  <div className="usersAdmin">
                      <DataGrid rows={usersAdmin} columns={columns} pageSize={20} checkboxSelection={false} />
                      <ModalCategory open={ModalCategoryOpen} setOpen={setModalCategoryOpen} type={ModalCategoryType}/>
                  </div>
                  {/* <MSalert visible={ok} text="Categoria eliminada con exito!" type="success"></MSalert>
                  <MSalert visible={error} text={errorText} type="error"></MSalert> */}
                </>
            }
        </>

    )
}

export default Users