
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button,Grid,CardContent,CardMedia,Card,Container,Typography,Tooltip,IconButton} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';

import { getCoordenadasDeAddress, shipCost } from "../../logica/Carrito";
import { Link } from "react-router-dom";
import { ProductCart } from "../../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";

const useStyle = makeStyles({

  container: {
    minHeight: "30vh",
    display: "grid",
    gridTemplateColumns: "2fr 2fr",
 
    borderRadius:"30px",
    marginTop:"3%",
    padding: 0,
    background: "black",
    alignItems: "center",
    gridColumnGap: "20%",
    width:"90%",
    marginLeft:"5%",
    backgroundColor: "transparent",  
 
   
  },

  containerIzq: {
    marginBottom:"43%",
    justifySelf: "stretch",
    minHeight: "30vh",
    borderRadius:"30px",
    position:"relative",
    background: "white",
    boxShadow: " 16px 11px 9px rgba(0, 0, 0, .5)",
  },

  containerDch: {
    marginBottom:"50%",
    minHeight: "20vh",
    borderRadius:"30px",
    background: "white",
    boxShadow: " 16px 11px 9px rgba(0, 0, 0, .5)",
   
  },
  root:{
    marginLeft:"20px",
    maxWidth: 345,
    color:"black",
    display: 'flex',
    height:150,
    border: "none", boxShadow: "none"
  },

  containerCarrito1:{
    marginTop:"10",
    gridRowGap: "20%",
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
  titleCarrito:{
    marginLeft:"10px",
  },
  titleCarritoVacio:{
    
    marginLeft:"35%",
    marginTop:"20%",
  },
  cardContent:{
      minWidth: 200,
    display: '1 0 auto' ,

  },
  circle:{
    marginTop:"50px",
    width:"50px",
    height:"50px",
    borderRadius: "50%",
    backgroundColor:"#8458aa",
    boxShadow: "5px 4px 7px rgba(0, 0, 0, .7)",
  },
  price:{
    marginTop:"5px",
    textAlign: "center",
    position: "relative",
    color:"white",
  },

  btncomprar:{
    postion:"relative",
    "&:hover ": {
      boxShadow: "5px 4px 10px rgba(0, 0, 0, .8)",
    },
    "@media only screen and (min-width: 1200px)":{
      left:"70%",
    },
    boxShadow: "2px 2px 3px rgba(0, 0, 0, .6)",
    color:"white",
   marginBottom:"10px",
   background: "linear-gradient(45deg, #19275a 30%, #cc90ff 90%)",
   
  },
});

type Props = {
  props: ProductCart[];
  handleRemoveFromCart: (clickedItem: ProductCart) => void;
  address: string;

};


const CarritoView: React.FC<Props> = ({props, handleRemoveFromCart,address}) => {
  const [shipppinCost, setshipppinCost] = React.useState(0);

  useEffect(() => {
    shippingCost();
  })
  //Realizar calculo del precio de envio:
  const shippingCost = async () => {
    setshipppinCost(await shipCost(address));
  };

  const calculateProductTotal = (items: ProductCart[]) =>
  items.reduce((ack: number, item) => ack + item.amount * Number(item.price), 0);

  const { session } = useSession();
  const classes = useStyle();
  const vacio =props.length
    return (

      <div className={classes.container} >
         <Grid container   className={classes.containerIzq} spacing={2} >
        {(() => {
        if (vacio===0){
          return(
      <Typography variant="h5" className={classes.titleCarritoVacio} >
      Carrito vacio
      </Typography>)} 
      else { 
        return(
        <Typography variant="h4"className={classes.titleCarrito}  >
        Carrito
      </Typography>
     )} 
          })()}
  
        <Grid container  className={classes.containerCarrito1}  spacing={1}>

        {props.map((item:ProductCart)=>{
          return (
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
  
          <IconButton aria-label="Eliminar" onClick={() => handleRemoveFromCart(item)}>
            <Tooltip title="Eliminar">
              <DeleteIcon  fontSize="large" sx={{ color: "black" }} />
     
            </Tooltip>
            </IconButton>
         
            </CardContent>
        </Card>
        <div className={classes.circle}>
                   <Typography variant="h5"  gutterBottom className={classes.price}>
                  {item.price}€
                  </Typography>
                  </div>
        </Grid>
     )})}
      </Grid>
      </Grid>
      {(() => {
        if (vacio!==0){
          return(
            <Container className={classes.containerDch} >
            <Typography variant="h4" gutterBottom>
            Precio
              </Typography>
              <Typography variant="h6" gutterBottom >
                      Precio de los productos: {calculateProductTotal(props)} €
                       </Typography>
                       {session.info.isLoggedIn ? (
                       <Typography variant="h6" gutterBottom >
                      Precio de envio {shipppinCost}€
                       </Typography>
                       
                       ):(
                             <Typography variant="h6" gutterBottom >
                              Debes iniciar sesión para ver el precio de envio
                               </Typography>)}
                            {session.info.isLoggedIn ? (
                       <Typography variant="h5" gutterBottom >
                       Total:{shipppinCost+calculateProductTotal(props)}€
                       </Typography>):(
                         <Typography variant="h5" gutterBottom >
                         Debes iniciar sesión para ver el precio total
                         </Typography>)}
                       {session.info.isLoggedIn ? (
                       <Button to='/Pago' component={Link} className={classes.btncomprar} variant="contained">Comprar</Button>):(
                      <Button to='/LogIn' component={Link} className={classes.btncomprar} variant="contained">LogIn</Button>)
                       }

            </Container> 
      )}  })()}

        </div>
    );

};
export default CarritoView;