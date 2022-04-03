import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import DatosPersonales from './DatosPersonales';
import MenuBar from '../comun/MenuBar';
import Pedidos from './Pedidos';
const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "30px 50px 60px 50px",
    boxSizing:"border-box",
    backgroundColor: "#6ABACE", 
  },

});
export const ProfileView = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
        <div className={classes.container}>
   
      </div>
      <div className={classes.container}>
      <DatosPersonales/>
      </div>
      <div className={classes.container}>
      <Pedidos/>
      </div>
    </React.Fragment>
  );
};




