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
    minWidth: 600,
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
    gridTemplateColumns: "1.5fr 2fr",
    font: "400 1em Tahoma,sans-serif",
    backgroundColor:"#8545A2",
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"5%",
    marginRight: "5%",
    gridColumnGap: "3%",
    textAlign: "center",
    margin: "auto",
    color: "#FFF",
  }, 
  cardContent:{
    minWidth: 200,
    minHeight: 300,
    backgroundColor: "#8545A2",
    display: '1 0 auto' ,
  },
  imagen:{
    width: 150,
    color:"black",
    display: 'flex',
    height: 200,
    backgroundColor: "transparent",
    marginLeft:"45%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    boxShadow: " 16px 11px 9px rgba(0, 0, 0, .5)",
    borderRadius:"20px",
  },
  media: {
    borderRadius:"20px",
    backgroundColor: "#8545A2",
  },
  datosPedido: {
    height: 200,
    width: 600,
    marginTop: "1%",
    marginRight: "55%",
  },
  contenedorImg: {
    borderRadius:"20px",
    minWidth: 120,
    minHeight:100,
  }
});


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
            <Grid item key={item.name}  xs={12} className={classes.media}>
            <Card  square={true} className={classes.imagen}>
              <CardMedia component="img"  className={classes.contenedorImg} image={item.photo} title={item.name} />
            </Card>
            </Grid>
            <div className={classes.datosPedido}>
                    <Typography component="div" variant="h5">
                    {item.name}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      Cantidad:{item.amount}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Fecha de compra:{item.fecha}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      Email:{item.email}
                    </Typography>
                  <Typography variant="subtitle1" component="div">
                    Precio:{item.price}€
                </Typography>
            </div>
        </div>
        )
      })}
      </div>
    )
  }
  
  export default Pedidos;