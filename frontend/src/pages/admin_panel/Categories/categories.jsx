import './categories.css'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';
// import EditUserModal from './EditUser/admin.editUsers';
import ExercicesService from "../../../services/exercices.service";
import AddIcon from '@material-ui/icons/Add';


const Categories = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true)
    const [categoriesAdmin, setCategoriesAdmin] = useState()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
      ExercicesService.getCategories().then(({data})=>{
        console.log(data.results);
        setCategoriesAdmin(data.results)
        setLoading(false);
      })
    }, [])


    const columns = [

        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nombre', width: 250 },
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
            renderCell: () => {
                return (<Button className="btn" variant="outlined" color="secondary" size="small"><DeleteIcon /></Button>)
            },
        },
    ];

    return (
        <>
            {
                loading ? null :
                <>
                  <div className="optionsCategories">
                    <Button className="btn-options" variant="outlined" color="default" size="small">Nueva Categoria</Button>
                  </div>
                  <div className="categoriesAdmin">
                      <DataGrid rows={categoriesAdmin} columns={columns} pageSize={20} checkboxSelection={false} />
                      {/* <EditUserModal user={""} visibleModal={modalVisible} setVisibleModal={setModalVisible} /> */}
                  </div>
                    </>
            }
        </>

    )
}

export default Categories