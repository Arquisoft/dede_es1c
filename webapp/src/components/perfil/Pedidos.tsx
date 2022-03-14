import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  pedido :{
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
  pedidoSup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  height: "100%",
  padding: "30px 50px 60px 50px",
  boxSizing:"border-box",
  backgroundColor: "#6ABACE", 
  }
});
const Pedidos = () => {

    var direccion = "Juan Fernandez Diaz Calle React Nº1-3ºD 33015 Oviedo Asturias España "
    const classes = useStyle();

    const pedidos = [
        {
          id:12345,
          Descripcion: "Pokemon Arceus",
          Precio: "45€",
          Direccion: direccion,
          Estado: "Pendiente"
        },
    
        {
          id:23143,
          Descripcion: "Mario Kart 8",
          Precio: "30€",
          Direccion: direccion,
          Estado: "Recibido"
        }
      ]

    return (
        <div className={classes.pedidoSup}>
        {pedidos.map(item=>(
            <div className={classes.pedido}>
              <h1>{item.Descripcion}</h1> 
              <br></br>
              <p>ID Pedido: {item.id}</p>
              <br></br>
              <p>Precio: {item.Precio}</p>
              <br></br>
              <p>Enviado a: {item.Direccion}</p>
              <br></br>
              <p>Estado del pedido: {item.Estado}</p>
            </div>
        ))};
        </div>
    )
  }
  
  export default Pedidos;