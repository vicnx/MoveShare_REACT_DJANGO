import './exercices.css'
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
import MSalert from 'components/alerts/alert'
import ExercicesService from 'services/exercices.service';
import { useExercice } from 'hooks/useExercice';





const Exercices = () => {
    const {deleteExercice,ok,error,setError} =useExercice(false)


    const [refresh, setrefresh] = useState(false);
    const [exercicesAdmin, setexercicesAdmin] = useState()
    const [loading, setLoading] = useState(true)
    const [categorySelected, setcategorySelected] = useState(null)


    const [ModalExerciceOpen, setModalExerciceOpen] = useState(false)
    const [ModalExerciceType, setModalExerciceType] = useState("create")
    const [errorText, seterrorText] = useState("No se ha podido eliminar el ejercicio, intentelo de nuevo.");




    useEffect(() => {
      ExercicesService.query().then(({data})=>{
        console.log(data)
        setexercicesAdmin(data.results)
        setLoading(false)

      })

      setModalExerciceOpen(false)
    }, [refresh])


    const columns = [

        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nombre', width: 150 },
        { field: 'slug', headerName: 'Slug', width: 100 },
        { field: 'image', headerName: 'Imagen', flex: 1 },
        {
          field: 'edit',
          headerName: 'Editar',
          description: 'This column is not sortable.',
          sortable: false,
          width: 100,
          renderCell: (params) => {
              return (<Button className="btn" variant="outlined" color="primary" size="small" onClick={(e)=>{setcategorySelected(params.row); setModalExerciceType("modify"); setTimeout(() => {setModalExerciceOpen(true)}, 100);}}><EditIcon /></Button>)
          },
      },
        {
            field: 'delete',
            headerName: 'Borrar',
            description: 'This column is not sortable.',
            sortable: false,
            width: 100,
            renderCell: (params) => {
                return (<Button className="btn" variant="outlined" color="secondary" size="small" onClick={()=>{deleteExercice(params.row);setrefresh(params.id)}}><DeleteIcon /></Button>)
            },
        },
    ];

    return (
        <>
            {
                loading ? <Loading/> :
                <>
                  {/* <div className="optionsCategories">
                    <Button className="btn-options" variant="outlined" color="default" size="small" onClick={(e)=>{setModalExerciceOpen(true);setModalExerciceType("create")}}>Nuevo Ejercicio</Button>
                  </div> */}
                  <div className="categoriesAdmin">
                      <DataGrid rows={exercicesAdmin} columns={columns} pageSize={20} checkboxSelection={false} />
                      <ModalCategory open={ModalExerciceOpen} setOpen={setModalExerciceOpen} type={ModalExerciceType} category={categorySelected} refresh={setrefresh}/>
                  </div>
                  <MSalert visible={ok} text="Ejercicio eliminado con exito!" type="success"></MSalert>
                  <MSalert visible={error} text={errorText} type="error"></MSalert>
                </>
            }
        </>

    )
}

export default Exercices