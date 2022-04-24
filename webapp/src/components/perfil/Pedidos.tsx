import  React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Order } from "../../shared/shareddtypes";
import { getPedidos } from "../../api/api";
import { useSession} from "@inrupt/solid-ui-react";
import { VCARD, FOAF } from "@inrupt/lit-generated-vocab-common";
import {getSolidDataset, getStringNoLocale, getThing, Thing, getUrl} from "@inrupt/solid-client";
import { useEffect,useState} from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Directions } from "@material-ui/icons";

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

async function retirevePODEmail(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let email = getStringNoLocale(profile as Thing, VCARD.note.iri.value) as string;
  return email;
}

type ReviewType = {
  webID: string;
  ped: Order[];
}

const Pedidos: React.FC<ReviewType> = ({webID,ped}) => {
  const classes = useStyle();

  return (
    <div className={classes.pedidoSup}>
      <h2 className={classes.tituloHistorico}>Historico de pedidos:</h2>
      <Typography>{ped.length}</Typography>
        {ped.map(item=>(
          <div className={classes.pedido}>
            <h1>{item.name}</h1> 
            <br></br>
            <p>Descripcion del articulo: {item.description}</p>
            <br></br>
            <p>Precio articulo: {item.price}€</p>
            <br></br>
            <p>Fecha de compra: {item.fecha}</p>
            <br></br>
            <p>Email: {item.email}</p>
            <br></br>
            <p>Cantidad: {item.amount}</p>
          </div>
      ))}
      </div>
    )
  }
  
  export default Pedidos;