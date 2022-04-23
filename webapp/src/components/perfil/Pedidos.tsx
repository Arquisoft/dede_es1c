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
  pedidoSup: {
    display: "grid",
    flexDirection: "column",
    backgroundColor:"#FFFF",
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"5%",
    marginRight: "5%",
    padding: "2em",
    textAlign: "center",
    margin: "auto",
    rowGap: "2em"
  },
  tituloHistorico: {
    font: "400 3em Tahoma,sans-serif",
    color: "#A569BD"
  },
  pedido :{
    display:"grid",
    font: "400 1em Tahoma,sans-serif",
    backgroundColor:"#8545A2",
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"5%",
    marginRight: "5%",
    textAlign: "center",
    margin: "auto",
    color: "#FFF",
  }, 
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
          Descripcion: "Mario Kart 8, League of legends",
          Precio: "60€",
          Direccion: direccion,
          Estado: "Recibido"
        }
      ]

    return (
        <div className={classes.pedidoSup}>
          <h2 className={classes.tituloHistorico}>Historico de pedidos:</h2>
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
        ))}
        </div>
    )
  }
  
  export default Pedidos;