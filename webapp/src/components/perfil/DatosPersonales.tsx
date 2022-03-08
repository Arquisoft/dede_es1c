import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import BottomNavigation from '@mui/material/BottomNavigation';
import { autocompleteClasses, Typography} from "@mui/material";
import { isWhiteSpaceLike } from "typescript";


const useStyle = makeStyles({
  datosPersonales: {
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
  direccion: {
    width: "500px",
  },
  etiquetas: {
    textAlign: "center",
    width: "100%",
  }
});

const DatosPersonales = () => {
  var userName = "Juan";
  var userEmail = "juan@hotmail.com"
  var direccion = "Juan Fernandez Diaz Calle React Nº1-3ºD 33015 Oviedo Asturias España "
  const classes = useStyle();

  return (
      <form className={classes.datosPersonales}>
        <div>
          <h1>Bienvenido</h1>
        </div>
          <div>
            <label className={classes.etiquetas} id="name">Nombre</label>
            <input id="name" type="text" placeholder="Actualize su nombre" value={userName}>
            </input>
          </div>
          <div>
            <label id="email">Correo asociado</label>
            <input id="email" type="text" placeholder="Actualize su correo" value={userEmail}>
            </input>
          </div>
          <div>
            <label id="direccion">Direccion de envio</label>
            <input className={classes.direccion} id="direccion" type="text" placeholder="Actualize su direccion de envio" value={direccion}>
            </input>
          </div>
          <div>
            <label>
              <button className="envio" type="submit">Actualizar</button>
            </label>
          </div>
        </form>
  )
}

export default DatosPersonales;