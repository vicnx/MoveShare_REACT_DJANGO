import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './ModalCategory.css'
import { StylesProvider } from "@material-ui/core/styles";
import {useCategories} from '../../../hooks/useCategories'
import MSalert from '../../moveshare/alerts/alert'




export default function ModalCategory(params) {
  const {createCategory,ok,error,setError} = useCategories(false)
  const [category, setCategory] = useState({'name':"","image":"https://www.creativefabrica.com/wp-content/uploads/2019/10/01/Bench-press-bodybuilding-gym-icon-by-Hoeda80-580x386.jpg"});
  const [errorText, seterrorText] = useState("No se ha podido crear el ejercicio intentelo de nuevo.");


  console.log(params);
  const handleClose = () => {
    params.setOpen(false);
  };
  const send = (e)=>{
    if(params.type == "create"){
      if(!category.name || category.name == ""){
        seterrorText("El nombre no puede estar vacio");
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000);
        return
      }
      if(!category.image || category.image == ""){
        seterrorText("La imagen no puede estar vacia");
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000);
        return
      }
      createCategory(category)
    }
  }

  return (
    <StylesProvider injectFirst>
      <Dialog className="modalCategory" open={params.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="modalCategoryTitle">{params.type} Category</DialogTitle>
        <DialogContent className="modalCategoryContent">
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <div className="modalCategoryInputs">
            <TextField
              label="Outlined" variant="outlined"
              autoFocus
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              className="input"
              onChange={(e) => setCategory({...category,['name']:e.target.value})}
              value={category.name}

            />
            <TextField
              label="Outlined" variant="outlined"
              id="image"
              label="Imagen"
              type="text"
              fullWidth
              className="input"
              onChange={(e) => setCategory({...category,['image']:e.target.value})}
              value={category.image}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={send} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      <MSalert visible={ok} text="Categoria creado con exito!" type="success"></MSalert>
      <MSalert visible={error} text={errorText} type="error"></MSalert>
    </StylesProvider>
  );
}