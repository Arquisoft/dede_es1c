
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from "../comun/MenuBar";
import {
  Button,
  CardMedia,
  Card,
  Container,
  Typography,IconButton,Tooltip
} from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import { Product } from "../../../../restapi/src/products/model";
import { getProducto } from "../../api/api";

/**const product = {
  id: 1,
  product_name: "Elden",
  price: 34,
  thumb:
    "https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/x6/x6w99LoD0pbanPNO.jpeg",
};**/

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
   
   "@media only screen and (min-width: 1200px)":{
      width:"50%",
    }
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
    minWidth: 320,
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
  carrito: {
    left:"10px",
    bottom:"110px",
    textAlign: "center",
    position: "relative",
    marginRight: "20px",


  },
  description: {

    textAlign: "center",
  


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

type ProductoItem = {
  name: string;
};

const Producto  = () => {
const [producto, setProducts] = useState<Product>({id:"0",photo: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930",name: "Nombre",price: "Error",stock: "Error",description: "Error"});

  const classes = useStyle();
  const {name} = useParams<ProductoItem>( );

    
  const refreshProducts = async () => {
    setProducts(await getProducto(name));
  }

  useEffect(()=>{
    refreshProducts();
  },[]);

  return (
    <React.Fragment>
      <div className={classes.container1}>
        <MenuBar />
   
          <Container className={classes.container2}>
                <Card square={true} className={classes.root} >
                  
              <CardMedia
                component="img"
                className={classes.media}
                image={producto.photo}
                title={producto.name}/>
            </Card>
            <Typography variant="h4" gutterBottom>
            <IconButton >
                      <Tooltip title="Añadir al carrito">
                        <AddShoppingCartIcon
                          fontSize="large"
                          sx={{ color: "black" }}
                        />
                      </Tooltip>
                    </IconButton>
              {producto.name}
             
            </Typography>
         
            
        
            <Typography variant="h5" gutterBottom  className={classes.description}>
            {producto.description}
            </Typography>
            <div className={classes.container3}>
              <div className={classes.circle}>
                <Typography variant="h5" className={classes.price} gutterBottom>
                  {producto.price}€
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
