import React from "react";
import { Grid } from "@material-ui/core"
import { InputAdornment, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { AccountCircle} from "@material-ui/icons";

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
                <TextField label="WebID" margin="normal" InputProps={{startAdornment: <InputAdornment position="start"><AccountCircle/></InputAdornment>}}/>
                <div style={{height: 20}}/>
                <Button color="primary" variant="contained">Inicia sesion con tu POD</Button> 
                <div style={{height: 20}}/>
                <Button color="primary" variant="outlined">¿No tienes una cuenta SOLID? Registrate aqui</Button>
                </div>
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Button color="primary" >Sobre DeDe</Button>
                    </Grid>
                    <Grid item>
                        <Button color="primary"> ¿Que es un POD?</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
    );
};

export default LogInView;
