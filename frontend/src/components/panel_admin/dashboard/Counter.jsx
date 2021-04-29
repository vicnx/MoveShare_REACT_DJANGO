import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './counters.css'
import { StylesProvider } from "@material-ui/core/styles";
import {useCategories} from '../../../hooks/useCategories'
import MSalert from '../../alerts/alert'
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
import GroupIcon from '@material-ui/icons/Group';
import { Divider} from "@material-ui/core";





export default function Counter(params) {
  return (
    <StylesProvider injectFirst>
      <div className={"contador " + params.color}>
        <div className="contador_contador">
          <CountUp end={params.count} duration={3} />
        </div>

        <Divider className="divider"/>
        <div className="counter_text_div">
          <span className="counter_text">{params.text}</span>
          {params.icono}
        </div>
      </div>
    </StylesProvider>

  );
}