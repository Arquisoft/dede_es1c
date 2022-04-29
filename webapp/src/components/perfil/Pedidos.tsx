import  React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Order } from "../../shared/shareddtypes";
import { getPedidos } from "../../api/api";
import { useSession} from "@inrupt/solid-ui-react";
import { VCARD, FOAF } from "@inrupt/lit-generated-vocab-common";
import {getSolidDataset, getStringNoLocale, getThing, Thing, getUrl} from "@inrupt/solid-client";
import { useEffect,useState} from "react";
import { Card, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography } from "@mui/material";
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
  cardContent:{
    minWidth: 200,
    display: '1 0 auto' ,
  },
  root:{
    marginLeft:"20px",
    maxWidth: 345,
    color:"black",
    display: 'flex',
    height:150,
    border: "none", boxShadow: "none"
  },
  containerCarrito:{

    marginLeft:"30px",
    display: 'flex',
    paddingRight:"20px",
    position: "relative",
    width: "200px",
    marginBottom:"20px",
    marginTop:"10px",
  },
  media: {
    borderRadius:"20px",
    minWidth: 120,
    minHeight:100,

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
      {ped.map((item:Order)=>{
        return(
          <div className={classes.pedido}>
            <Grid item key={item.name}  xs={12} className={classes.containerCarrito}>
            <Card  square={true} className={classes.root}>
            <CardMedia component="img"  className={classes.media} image={item.photo} title={item.name} />

            <CardContent className={classes.cardContent}  >
            <Typography component="div" variant="h5">
              {item.name}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Cantidad:{item.amount}
            </Typography>
            </CardContent>
          </Card>
        </Grid>
        </div>)
      })}
      </div>
    )
  }
  
  export default Pedidos;