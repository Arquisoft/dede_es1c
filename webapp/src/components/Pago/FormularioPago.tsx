import React from 'react';
import { Grid } from "@material-ui/core"
import { InputAdornment, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { AccountBalanceWallet, VpnKey, CalendarToday, Person} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from '@emotion/react';

const useStyle = makeStyles({
    formulario: {
        display:"grid",
        font: "400 1em Tahoma,sans-serif",
        backgroundColor:"#FFFF",
        borderRadius: 30,
        boxShadow: "7px 6px rgba(0, 0, 0, .5)",
        marginLeft:"5%",
        marginRight: "5%",
        padding: "1em",
        textAlign: "center",
        margin: "auto",
        color: "#4D8AE2",
    },
  
});

const FormularioPago = () => {
    const classes = useStyle();
    return(
    <div className={classes.formulario}>
        <Grid container style={{minHeight: '100vh'}}>
            <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding: 10}}> 
                <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200}}>
                <Grid container justify="center">
                    <img src="https://cdn.pixabay.com/photo/2020/07/05/17/32/credit-card-5373806_960_720.png" width={100}/>    
                </Grid>
                <TextField label="Nombre de propietario" margin="normal" InputProps={{startAdornment: <InputAdornment position="start"><Person/></InputAdornment>}}/>
                <div style={{height: 20}}/>
                <TextField label="Nº de tarjeta" margin="normal" variant="outlined" InputProps={{startAdornment: <InputAdornment position="start"><AccountBalanceWallet/></InputAdornment>}}/>
                <div style={{height: 20}}/>
                <TextField label="Fecha de caducidad" margin="normal" variant="outlined" InputProps={{startAdornment: <InputAdornment position="start"><CalendarToday/></InputAdornment>}}/>
                <div style={{height: 20}}/>
                <TextField label="CVC" margin="normal" variant="outlined" InputProps={{startAdornment: <InputAdornment position="start"><VpnKey/></InputAdornment>}}/>
                <div style={{height: 20}}/>
                <Button color="primary" variant="contained">Pagar</Button> 
                </div>
            </Grid>
        </Grid>
    </div>
    );
};

export default FormularioPago;