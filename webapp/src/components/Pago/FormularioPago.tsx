import React, {useState} from 'react';
import { Grid } from "@material-ui/core";
import { InputAdornment, TextField, Button, Modal, FormControl, Input } from "@mui/material";
import { AccountBalanceWallet, VpnKey, CalendarToday, Person} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ThemeConsumer } from 'styled-components';
import { SettingsPhoneTwoTone } from '@mui/icons-material';

const useStyle = makeStyles({
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
    pagoOk: {
        position: 'absolute',
        width: 400,
        display: "grid",
        font: "400 1em Tahoma,sans-serif",
        backgroundColor:"#FFFF",
        borderRadius: 30,
        padding: "16px 32px 24px",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%,-50%)',
        textAlign: "center",
        button: "center"
    }
});


const FormularioPago = () => {
    const classes = useStyle();

    const[mostrar1, setPagoOk]=useState(false);

    const[mostrar2, setPagoNotOk]=useState(false);

    const[nameOk, setNameOk]=React.useState(false);
    const[numeroOk, setNumeroOk]=React.useState(false);
    const[fechaOk, setFechaOk]=React.useState(false);
    const[cvcOk, setCVCOk]=React.useState(false);

    const validacionTodosLosCampos = () => {
        if(nameOk && numeroOk && fechaOk && cvcOk) {
            mostrarPagoOk();
        } else {
            mostrarPagoNotOk();
        }
    }

    const mostrarPagoOk = ()=> {
        setPagoOk(!mostrar1);
    }

    const mostrarPagoNotOk = ()=> {
        setPagoNotOk(!mostrar2);
    }

    const modal1=(
        <div className={classes.pagoOk}>
            <div> 
                <img src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png" width={50}/>
                <h2>Tarjeta valida, haga click para aceptar el pago</h2>
                <img src="https://orxcosmeticos.com/wp-content/uploads/2018/09/pago-seguro.jpg" width={300}/>
                <Grid>
                    <Button to='/Perfil' component={Link} color="primary" variant="contained">Aceptar</Button> 
                </Grid>
            </div>
        </div>
    )

    const modal2=(
        <div className={classes.pagoOk}>
            <div> 
                <img src="https://static.thenounproject.com/png/2052102-200.png" width={150}/>
                <h2>Tarjeta invalida, compruebe los campos</h2>
                <img src="https://senordescuento.com/wp-content/uploads/2019/06/tarjetas-credito-logos.png" width={200}/>
            </div>
        </div>
    )
    
    const [name, setName] = React.useState<string>();
    const [errorsName,setErrorsName] = React.useState<{name: string}>();

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        setErrorsName({name: ''})
        setName(value);
        let reg = new RegExp(/^[a-zA-Z\s]*$/).test(value);
        if(!reg) {
            setErrorsName({name: 'Nombre invalido'})
            setNameOk(false);
        } else {
            setNameOk(true);
        }
    };

    const [numero, setNumero] = React.useState<string>();
    const [errorsNum,setErrorsNum] = React.useState<{numero: string}>();

    const handleChangeNum = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        setErrorsNum({numero: ''})
        setNumero(value);
        let reg = new RegExp(/^(\d{4}\s?){4}$/).test(value);
        if(!reg) {
            setErrorsNum({numero: 'Numero invalido'})
            setNumeroOk(false);
        } else {
            setNumeroOk(true);
        }
    };

    const [fecha, setFecha] = React.useState<string>();
    const [errorsFecha,setErrorsFecha] = React.useState<{fecha: string}>();

    const handleChangeFecha = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        setErrorsFecha({fecha: ''})
        setNumero(value);
        let reg = new RegExp(/^(1[0-2]|0?[1-9])[/]([0-9]?[0-9])$/).test(value);
        if(!reg) {
            setErrorsFecha({fecha: 'Fecha invalida'})
            setFechaOk(false);
        } else {
            setFechaOk(true);
        }
    };

    const [cvc, setCVC] = React.useState<string>();
    const [errorsCVC,setErrorsCVC] = React.useState<{cvc: string}>();

    const handleChangeCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        setErrorsCVC({cvc: ''})
        setNumero(value.trim());
        let reg = new RegExp(/^\d{3}$/).test(value);
        if(!reg) {
            setErrorsCVC({cvc: 'Fecha invalida'})
            setCVCOk(false);
        } else {
            setCVCOk(true);
        }
    };

    return(
    <div className={classes.formulario}>
        <Modal open={mostrar1} onClose={mostrarPagoOk}>
                {modal1}
        </Modal>

        <Modal open={mostrar2} onClose={mostrarPagoNotOk}>
                {modal2}
        </Modal>
        
        <Grid container alignItems="center" direction="column" justify="space-between" style={{padding: 100}}> 
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200}}>
            <Grid container justify="center">
                <img src="https://cdn.pixabay.com/photo/2020/07/05/17/32/credit-card-5373806_960_720.png" width={200}/>    
            </Grid>
            <Grid container justify="center">
                <img src="https://senordescuento.com/wp-content/uploads/2019/06/tarjetas-credito-logos.png" width={200}/>    
            </Grid>
            <TextField 
                id="nombre" 
                label="Nombre de propietario"  
                margin="normal" 
                placeholder='NOMBRE TARJETA' 
                required 
                error={Boolean(errorsName?.name)} 
                helperText={(errorsName?.name)} 
                onChange={handleChangeName} 
                InputProps={{startAdornment: <InputAdornment position="start"><Person/></InputAdornment>}}/>
            <div style={{height: 20, width: 50}}/>
            <TextField 
                id="numero" 
                label="Nº de tarjeta" 
                margin="normal" 
                placeholder='XXXX XXXX XXXX XXXX' 
                variant="outlined" 
                required 
                error={Boolean(errorsNum?.numero)} 
                helperText={(errorsNum?.numero)} 
                onChange={handleChangeNum} 
                InputProps={{startAdornment: <InputAdornment position="start"><AccountBalanceWallet/></InputAdornment>}}/>
            <div style={{ display: "flex", maxWidth: 500, minWidth: 200}}>
            <TextField  
                id="fecha" 
                label="Fecha de caducidad" 
                margin="normal" 
                variant="outlined" 
                placeholder='MM/YY' 
                required 
                error={Boolean(errorsFecha?.fecha)} 
                helperText={(errorsFecha?.fecha)} 
                onChange={handleChangeFecha}
                InputProps={{startAdornment: <InputAdornment position="start"><CalendarToday/></InputAdornment>}}/>
            <TextField  
                id="cvc" 
                label="CVC" 
                margin="normal" 
                variant="outlined" 
                placeholder='XXX' 
                required 
                error={Boolean(errorsCVC?.cvc)} 
                helperText={(errorsCVC?.cvc)} 
                onChange={handleChangeCVC}
                InputProps={{startAdornment: <InputAdornment position="start"><VpnKey/></InputAdornment>}}/>
            </div>
            <div style={{height: 20}}/>
            <Button onClick={()=>validacionTodosLosCampos()} color="primary" variant="contained">Pagar</Button> 
            </div>
        </Grid>
    </div>
    );
};

export default FormularioPago;