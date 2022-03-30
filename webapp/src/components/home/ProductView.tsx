
import React, { useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography,Tooltip } from "@material-ui/core";
import { CardActionArea, Grid, IconButton ,CardActions} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import  {getProductos} from '../../api/api';



import { Link } from "react-router-dom";

import { Product } from "../../../../restapi/src/products/productModel";



const useStyle = makeStyles({
  root: {
    position: "relative",
    maxWidth: "190px",
    height: "200px",
    borderRadius: 20,
    transition: "transform 0.15s ease-in-out",
    "&:hover ": {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    },
 
  },
  media: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "220px",
    width: "200px",
  },

  action: {
    position: "relative",
    height: "220px",
      width: "200px",
  },

  container3: {
    marginTop: "3%",
    backgroundColor: "#FFFF",
    borderRadius: 30,
    boxShadow: " 10px 8px 7px 9px rgba(0, 0, 0, .5)",
    marginLeft: "10%",
    marginRight: "12%",
  },

  comboBox:{
    marginLeft:"80%",
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    borderRadius: 10,
    marginBottom:"5px",
  },

  textfield:{
    "& .MuiAutocomplete-listbox": {
      border: "2px solid grey",
      minHeight: 400,
      color: "green",
      fontSize: 18,
  }
},
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
  },

  cardContent: {
    position: "relative",
    color: "#ffffff",
  },

  h3: {
    fontSize: "34px",
    marginLeft: "34px",
    height:"20px"
  },
  name: {
    position: "relative",
  },
  price: {

    textAlign: "center",
    position: "relative",
  },
  circle: {
    position:"relative",
    marginLeft: "125px",
    width: "37px",
    height: "37px",
    borderRadius: "50%",
    backgroundColor: "#8458aa",
    boxShadow: "5px 4px 2px rgba(0, 0, 0, .6)",
    marginTop: "68%",
  },
  text: {
    textAlign: "center",
    position: "relative",
    marginRight: "20px",
    marginTop:"5px",
  },
  carrito: {
    left:"10px",
    bottom:"110px",
    textAlign: "center",
    position: "relative",
    marginRight: "20px",


  },
});

type Props = {
  props: Product[];
  handleAddToCart: (clickedItem: Product) => void;
  
};


const ProductView: React.FC<Props> = ({ props, handleAddToCart}) => {
  const [productos, setProductos]=useState<Product[]>(props);
  const classes = useStyle();
  const categorias = ['','deportes','acción','aventuras','estrategia'];
  const [category, setCategory]=React.useState<string | null>(categorias[0]);
  const filterFunction = (text: any)=>{
    var  filter;
      if(text===""){
        filter=props;
      }
      else{
        filter=props.filter( (prop)=>  prop.categories[0] ===text);}
        setProductos(filter);
        refreshProducts(filter);
      }

  const refreshProducts = async (productos:Product[]) => {
      
        setProductos(productos);
      
       
      }
  const refreshTotalProducts = async () => {
    setProductos(await  getProductos());
  }
  useEffect(()=>{
    refreshTotalProducts();
    setCategory(categorias[0]);
  },[]);
        

    
  return (
    <div className={classes.container3}>
      <h3 className={classes.h3}>Productos</h3>

      <Grid
        container
        justifyContent="center"
        spacing={1}
        paddingLeft="30px"
        paddingBottom="50px"
        paddingRight="20px"
      >
      <Autocomplete className={classes.comboBox}
       value={category}
        options={categorias}
        onInputChange={(event: any, newValue: string | null) => {
          setCategory(newValue);
          filterFunction(newValue);
        }}
        style={{ width: 200 }}
        renderInput={(params) =>
          <TextField {...params} label="Categoría" className={classes.textfield}/>}
      />

        {productos.map((item,i)=>{
          return (
          <Grid
            item
            key={item.name}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            marginBottom="10px"
            className={classes.action}
          >
         
            <Card className={classes.root}>
 
              <CardActionArea className={classes.action}  to={`/Producto/${item.name}`} component={Link}  >
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={item.photo}
                  title={item.name}
                />
                <CardContent className={classes.cardContent}>

                  <div className={classes.circle}>
                    <Typography
                      variant="h5"
                      className={classes.price}
                      gutterBottom
                    >
                      {item.price}€
                    </Typography>
                  </div>

                </CardContent>
              </CardActionArea>
              <CardActions className={classes.carrito}>
              <IconButton >
                    <Tooltip title="Añadir al carrito">
                      <AddShoppingCartIcon
                        fontSize="large"
                        sx={{ color: "white" }} onClick={() => handleAddToCart(item)} 
                      />
                    </Tooltip>
                  </IconButton>
                  </CardActions>
         
            </Card>
 
            <div className={classes.text}>{item.name}
          </div>
          </Grid>
          )})}
      </Grid>
    </div>
  );
};
export default ProductView;