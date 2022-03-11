import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from "../comun/MenuBar";
import {
  Button,
  Grid,
  CardContent,
  CardMedia,
  Card,
  Container,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
const product = {
  id: 1,
  product_name: "Elden",
  price: 34,
  thumb:
    "https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/x6/x6w99LoD0pbanPNO.jpeg",
};

const useStyle = makeStyles({
  container1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "30px 50px 60px 50px",
    boxSizing: "border-box",
    backgroundColor: "#6ABACE",
  },


  container2: {
    marginTop:"3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    background: "white",
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    borderRadius: "30px",
    width:"50%"

  },

container3:{
    marginTop: "10px",
    textAlign: "center",
    display: "flex",
    padding: "15px",
    minHeight: "60px",
},

  containerIzq: {
    justifySelf: "stretch",
    minHeight: "30vh",
    position: "relative",
    color: "transparent",
  },

  containerCarrito1: {
    marginTop: "10",
    gridRowGap: "20%",
  },

  containerCarrito: {
    marginLeft: "70px",
    display: "center",
    position: "relative",
  },

  root: {
    marginTop:"2%",
     marginBottom:"2%",
    maxWidth: 320,
    color: "black",
    display: "flex",
    height: 400,
    borderRadius: "30px",
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
  },

  media: {
    borderRadius: "20px",
    minWidth: 120,
    minHeight: 100,
  },
  circle: {
    width: "90px",
    height: "50px",
    borderRadius: "30px",
    backgroundColor: "#6ABACE",
    boxShadow: "5px 4px rgba(0, 0, 0, .6)",
  },
  price: {
    marginTop:"8px",
    textAlign: "center",
    position: "relative",
    color:"white"
  },

  btncomprar: {
    marginLeft: "30px",
    postion: "relative",
    "&:hover ": {
      boxShadow: "5px 4px rgba(0, 0, 0, .6)",
    },
    boxShadow: "2px 2px rgba(0, 0, 0, .6)",
    color: "white",
    marginBottom: "10px",
    background: "linear-gradient(45deg, #28313b 20%, #6ABACE 80%)",
  },
});
const Producto = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.container1}>
        <MenuBar />
   
          <Container className={classes.container2}>
                <Card square={true} className={classes.root}>
              <CardMedia
                component="img"
                className={classes.media}
                image={product.thumb}
                title={product.product_name}
              />
            </Card>
            <Typography variant="h4" gutterBottom>
              {product.product_name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Descripcion
            </Typography>
            <div className={classes.container3}>
              <div className={classes.circle}>
                <Typography variant="h5" className={classes.price} gutterBottom>
                  {product.price}€
                </Typography>
              </div>
              <Button className={classes.btncomprar} variant="contained">
                Comprar
              </Button>
            </div>
          </Container>
        </div>

    </React.Fragment>
  );
};
export default Producto;
