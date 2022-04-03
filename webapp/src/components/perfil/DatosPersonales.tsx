import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button'
import { InputAdornment, TextField, Typography } from "@mui/material";
import { AccountBalanceWallet, Directions, Email, Person} from "@material-ui/icons";
import { Grid } from "@material-ui/core"


const useStyle = makeStyles({
  datosPersonales: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "30px 50px 60px 50px",
    boxSizing:"border-box",
    backgroundColor: "#6ABACE", 
    borderColor: "#2B73DB"
  },
  direccion: {
    width: "100%",
  },
  etiquetas: {
    textAlign: "center",
    width: "100%",
  },
  boton: {
    color: "4D8AE2",
  },
  formulario: {
    display:"grid",
    font: "400 1em Tahoma,sans-serif",
    backgroundColor:"#FFFF",
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"10%",
    marginRight: "10%",
    textAlign: "center",
    color: "#4D8AE2",
},
});

const DatosPersonales = () => {
  var userName = "Juan Fernandez Diaz";
  var userEmail = "juan@hotmail.com"
  var direccion = "Calle React Nº1-3ºD 33015 Oviedo Asturias España "
  const classes = useStyle();
  return (
    <div className={classes.formulario}>
        <Grid container alignItems="center" direction="column" justify="space-between" style={{padding: 20}}> 
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200}}>
            <Grid container justify="center">
                <img src="https://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png" width={150}/>    
            </Grid>
            <Typography variant="h5">¡Bienvenido!</Typography>
            <TextField label="Nombre" margin="normal" value={userName} InputProps={{startAdornment: <InputAdornment position="start"><Person/></InputAdornment>}}/>
            <div style={{height: 20, width: 500}}/>
            <TextField label="Correo asociado" margin="normal" variant="outlined" value={userEmail} InputProps={{startAdornment: <InputAdornment position="start"><Email/></InputAdornment>}}/>
            <div style={{height: 20}}/>
            <TextField label="Direccion de envio asociada" margin="normal" variant="outlined" value={direccion} InputProps={{startAdornment: <InputAdornment position="start"><Directions/></InputAdornment>}}/>
            <div style={{height: 20}}/>
            <Button color="primary" variant="contained">Actualizar</Button> 
            </div>
        </Grid>
    </div>
  )
}

export default DatosPersonales;