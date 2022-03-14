import React from 'react';
import { Grid } from "@material-ui/core"
import { InputAdornment, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { AccountBalanceWallet, VpnKey, CalendarToday, Person} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    formulario: {
        display:"grid",
        font: "400 1em Tahoma,sans-serif",
        backgroundColor:"#FFFF",
        borderRadius: 30,
        boxShadow: "7px 6px rgba(0, 0, 0, .5)",
        marginLeft:"10%",
        marginRight: "10%",
        marginBottom: "50%",
        textAlign: "center",
        color: "#4D8AE2",
    },
  
});

const FormularioPago = () => {
    const classes = useStyle();
    return(
    <div className={classes.formulario}>
        <Grid container alignItems="center" direction="column" justify="space-between" style={{padding: 100}}> 
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200}}>
            <Grid container justify="center">
                <img src="https://cdn.pixabay.com/photo/2020/07/05/17/32/credit-card-5373806_960_720.png" width={200}/>    
            </Grid>
            <Grid container justify="center">
                <img src="https://senordescuento.com/wp-content/uploads/2019/06/tarjetas-credito-logos.png" width={200}/>    
            </Grid>
            <TextField label="Nombre de propietario" margin="normal" placeholder='NOMBRE TARJETA' InputProps={{startAdornment: <InputAdornment position="start"><Person/></InputAdornment>}}/>
            <div style={{height: 20, width: 50}}/>
            <TextField label="Nº de tarjeta" margin="normal" placeholder='XXXX XXXX XXXX XXXX' variant="outlined" InputProps={{startAdornment: <InputAdornment position="start"><AccountBalanceWallet/></InputAdornment>}}/>
            <div style={{ display: "flex", maxWidth: 500, minWidth: 200}}>
            <TextField label="Fecha de caducidad" margin="normal" variant="outlined" placeholder='MM/YY' InputProps={{startAdornment: <InputAdornment position="start"><CalendarToday/></InputAdornment>}}/>
            <TextField label="CVC" margin="normal" variant="outlined" placeholder='XXX' InputProps={{startAdornment: <InputAdornment position="start"><VpnKey/></InputAdornment>}}/>
            </div>
            <div style={{height: 20}}/>
            <Button to='/Perfil' component={Link} color="primary" variant="contained">Pagar</Button> 
            </div>
        </Grid>
    </div>
    );
};

export default FormularioPago;