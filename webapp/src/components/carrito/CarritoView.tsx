
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button,Grid,CardContent,CardMedia,Card,Container,Typography,Tooltip,IconButton} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import { calcularTotal } from "../../logica/Carrito";
import { ProductCart } from "../../shared/shareddtypes";
import { Product } from "../../../../restapi/src/products/model";

const product_card = [
  {
    id:1,
    product_name:"Elden",
    price:34,
    thumb:"https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/x6/x6w99LoD0pbanPNO.jpeg"
  },
  {
    id:2,
    product_name:"Fifa",

    price:23,
    thumb:"https://yuzu-emu.org/images/game/boxart/mario-kart-8-deluxe.png"
  },
  {
    id:3,
    product_name:"Valorant",
 
    price:3,
    thumb:"https://yuzu-emu.org/images/game/boxart/animal-crossing-new-horizons.png"
  },
  

 
  

]

const useStyle = makeStyles({

  container: {
    minHeight: "30vh",
    display: "grid",
    gridTemplateColumns: "2fr 2fr",
    borderRadius:"30px",
    marginTop:"3%",
    padding: 0,
    background: "black",
    gridColumnGap: "20%",
    width:"90%",
    marginLeft:"5%",
    backgroundColor: "#6ABACE", 
 
   
  },

  containerIzq: {
    justifySelf: "stretch",
    minHeight: "30vh",
    borderRadius:"30px",
    position:"relative",
    background: "white",
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",

  },

  containerDch: {
    marginBottom:"55%",
    minHeight: "20vh",
    borderRadius:"30px",
    background: "white",
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
   
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
    marginLeft:"20px",
  },
  cardContent:{
      minWidth: 300,
    display: '1 0 auto' ,

  },
  circle:{
    marginTop:"50px",
    width:"50px",
    height:"50px",
    borderRadius: "50%",
    backgroundColor:"#6ABACE",
    boxShadow: "5px 4px rgba(0, 0, 0, .6)",
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

      boxShadow: "5px 4px rgba(0, 0, 0, .6)",
    },
    "@media only screen and (min-width: 1200px)":{
      left:"70%",
    },
    boxShadow: "2px 2px rgba(0, 0, 0, .6)",
    color:"white",
   marginBottom:"10px",
   background: "linear-gradient(45deg, #28313b 20%, #6ABACE 80%)",
   
  },
});


type Props = {
  props: ProductCart[];
  handleRemoveFromCart: (clickedItem: ProductCart) => void;

};

const CarritoView: React.FC<Props> = ({props, handleRemoveFromCart}) => {
  const classes = useStyle();
  const vacio =props.length
    return (

      <div className={classes.container} >
         <Grid container   className={classes.containerIzq} spacing={2} >
        {(() => {
        if (vacio===0){
          return(
      <Typography variant="h5" className={classes.titleCarrito} >
      Carrito vacio
      </Typography>)} 
      else{
        <Typography variant="h4"className={classes.titleCarrito}  >
        Carrito
      </Typography>
      }
          })()}
  
        <Grid container  className={classes.containerCarrito1}  spacing={1}>

        {props.map((item:ProductCart)=>{

          return (
         <Grid item key={item.id}  xs={12} className={classes.containerCarrito}>
        <Card  square={true} className={classes.root}>
        <CardMedia component="img"  className={classes.media} image={item.photo} title={item.name} />

        <CardContent className={classes.cardContent}  >
        <Typography component="div" variant="h5">
             {item.name}
          </Typography>
          <Typography >
             Descripcion del juego
          </Typography>
          <Typography variant="subtitle1" component="div">
           Cantidad:{item.amount}
          </Typography>
  
          <IconButton onClick={() => handleRemoveFromCart(item)}>
            <Tooltip title="Eliminar">
              <DeleteIcon   fontSize="large" sx={{ color: "black" }} />
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
      <Container className={classes.containerDch} >
        <Typography variant="h4" gutterBottom>
        Precio
          </Typography>
          <Typography variant="h6" gutterBottom >
                  Precio de los productos: 
                   </Typography>
                   <Typography variant="h6" gutterBottom >
                  Precio de envio 
                   </Typography>
                   <Typography variant="h5" gutterBottom >
                  Total
                   </Typography>
                   <Button className={classes.btncomprar} variant="contained">Comprar</Button>
        </Container>
        </div>
    );

};
export default CarritoView;