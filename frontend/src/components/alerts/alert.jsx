import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import "./alert.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MSalert(state) {
  // const { vertical, horizontal, open } = state;
  const vertical = "top";
  const horizontal= 'center'
  const handleClose = (event, reason) => {
    console.log("CLOSE ALERT");
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div className="MSalert">
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={state.visible} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={state.type}>
          {state.text}
        </Alert>
      </Snackbar>
    </div>
  );
}
