import React from "react";
import { Grid } from "@material-ui/core"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { ProductCart } from "../../shared/shareddtypes";

export const LogInFragmento = () => {
    
    const useStyle = makeStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "30px 50px 60px 50px",
            boxSizing:"border-box",
            backgroundColor: "#FFFFFF", 
            borderRadius: 30,
        },
      });

      const classes = useStyle();

      type Props = {
        cartItems: ProductCart[]
      };
      
    return(
        <Grid container style={{minHeight: '100vh'}}>
            <Grid item xs={12} sm={6}>
                <img src="https://i.pinimg.com/originals/fc/ce/c1/fccec1a63579bf7de24d6955cbddc1ca.png" style={{width: '100%', height:'100%', objectFit: 'cover', boxSizing:"border-box",  borderRadius: 30 ,padding: "30px 50px 60px 50px"}}/>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding: 10}}> 
                <div/>
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200, backgroundColor: "#FFFFFF", boxSizing:"border-box",  borderRadius: 30 ,padding: "30px 50px 60px 50px"}}>
                    <Grid container justify="center">
                        <img src="https://solidproject.org/assets/img/solid-emblem.svg" width={100}/>    
                    </Grid>
                    <div style={{height: 20}}/>
                    <Button color="primary" variant="contained" to='/inrupt' component={Link}>Inicia sesion con INRUPT</Button> 
                    <div style={{height: 20}}/>
                    <Button color="primary" variant="outlined" onClick={event =>  window.location.href='https://inrupt.net/register'}>
                        ¿No tienes una cuenta SOLID? Registrate aqui
                    </Button>
                </div>
                <div style={{backgroundColor: "#FFFFFF", boxSizing:"border-box",  borderRadius: 30 ,padding: "15px 50px 15px 50px"}}>
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Button color="primary" onClick={event =>  window.location.href='https://github.com/Arquisoft/dede_es1c'}>Sobre DeDe</Button>
                    </Grid>
                    <Grid item>
                        <Button color="primary" onClick={event =>  window.location.href='https://inrupt.com/solid'}> ¿Que es un POD?</Button>
                    </Grid>
                </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default LogInFragmento;
