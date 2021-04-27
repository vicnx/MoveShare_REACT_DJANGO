import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './ModalCategory.css'
import { StylesProvider } from "@material-ui/core/styles";


export default function ModalCategory(params) {

  console.log(params);
  const handleClose = () => {
    params.setOpen(false);
  };

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
              autoFocus
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              className="input"
            />
            <TextField
              id="image"
              label="Imagen"
              type="text"
              fullWidth
              className="input"
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </StylesProvider>
  );
}