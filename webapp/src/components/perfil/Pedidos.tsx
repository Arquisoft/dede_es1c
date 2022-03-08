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

});

const Pedidos = () => {
    const classes = useStyle();
    var direccion = "Juan Fernandez Diaz Calle React Nº1-3ºD 33015 Oviedo Asturias España "

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
        <div>
        {pedidos.map(item=>(
            <div>
              <h1>{item.Descripcion}</h1> 
              <br></br>
              <p>{item.id}</p>
              <br></br>
              <p>{item.Precio}</p>
              <br></br>
              <p>{item.Direccion}</p>
              <br></br>
              <p>{item.Estado}</p>
            </div>
        ))};
        </div>
    )
  }
  
  export default Pedidos;