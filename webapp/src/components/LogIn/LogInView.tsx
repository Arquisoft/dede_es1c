import React from "react";
import { Grid } from "@material-ui/core"
import { InputAdornment, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { AccountCircle} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState} from "react";

export const LogInView = () => {
    return(
    <div>
        <Grid container style={{minHeight: '100vh'}}>
            <Grid item xs={12} sm={6}>
                <img src="https://wallpaperaccess.com/full/2645205.jpg" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding: 10}}> 
                <div/>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200}}>
                <Grid container justify="center">
                    <img src="https://solidproject.org/assets/img/solid-emblem.svg" width={100}/>    
                </Grid>
                <div style={{height: 20}}/>
                <Button color="primary" variant="contained" to='/inrupt' component={Link}>Inicia sesion con INRUPT</Button> 
                <div style={{height: 20}}/>
                <Button color="primary" variant="outlined" onClick={event =>  window.location.href='https://auth.inrupt.com/signup?response_type=code&client_id=291nuca1atm91cstojs8ndsbkh&scope=openid+openid+profile+openid+profile&redirect_uri=https%3A%2F%2Fbroker.pod.inrupt.com%2Fcallback&state=87041eea-e9f2-4f81-86d1-7192469fdc73'}>
                    ¿No tienes una cuenta SOLID? Registrate aqui
                    </Button>
                </div>
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Button color="primary" onClick={event =>  window.location.href='https://github.com/Arquisoft/dede_es1c'}>Sobre DeDe</Button>
                    </Grid>
                    <Grid item>
                        <Button color="primary" onClick={event =>  window.location.href='https://inrupt.com/solid'}> ¿Que es un POD?</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
    );
};

export default LogInView;
