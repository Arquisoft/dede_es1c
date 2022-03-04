import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core";
import { AddShoppingCart } from "@mui/icons-material";
import { CardActionArea, Grid } from "@mui/material";

const product_card = [
  {
    id:1,
    product_name:"Elden",
    description:"Hola que tal",
    price:34,
    thumb:"https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/x6/x6w99LoD0pbanPNO.jpeg"
  },
  {
    id:2,
    product_name:"Fifa",
    description:"Hola que tal",
    price:23,
    thumb:"https://yuzu-emu.org/images/game/boxart/mario-kart-8-deluxe.png"
  },
  {
    id:3,
    product_name:"Valorant",
    description:"Hola que tal",
    price:3,
    thumb:"https://yuzu-emu.org/images/game/boxart/animal-crossing-new-horizons.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://static.truetrophies.com/boxart/Game_3265.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/competitive_logo_large.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://yuzu-emu.org/images/game/boxart/animal-crossing-new-horizons.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://styles.redditmedia.com/t5_2gt9zb/styles/communityIcon_rsg25kbthbk41.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://static.truetrophies.com/boxart/Game_1022.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_screenshots/kC/kCp5crqMyXVivyej.jpeg"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://yuzu-emu.org/images/game/boxart/mario-kart-8-deluxe.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://as01.epimg.net/meristation/imagenes/2021/10/18/header_image/334243981634566295.jpg"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/tournaments_avatars/br/bryPz47kvT8b7c3p.jpeg"
  },
  
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://styles.redditmedia.com/t5_2gt9zb/styles/communityIcon_rsg25kbthbk41.png"
  },
  {
    id:4,
    product_name:"Apex",
    description:"Hola que tal",
    price:15,
    thumb:"https://static.chollometro.com/threads/raw/7jf5K/746149_1/re/300x300/qt/60/746149_1.jpg"
  },
  
  
  
  
  
]

const useStyle = makeStyles({
  root: {

    position: "relative",
    height: '200px',
    maxWidth: '190px',   
    borderRadius: 20,
    transition: "transform 0.15s ease-in-out",
    "&:hover ": { transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "-1px 1px 20px 0px rgba(0,0,0,0.9)",
},
    
  },

  media: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "220px",
    width: "200px"


  },
  action:{
    position: "relative",
    height: "220px",
    width: "200px"
  },
  container3: {

    marginTop:"3%",
    backgroundColor:"#FFFF",
    borderRadius: 30,
    boxShadow: "7px 7px #000000",
    marginLeft:"10%",
    marginRight:"12%",
   
  },
  cardActions: {
    display: 'flex',
    justifyContent:'flex-end',
    paddingRight:"20px",
  },
  cardContent: {
    position: "relative",
    color: "#ffffff",
  },

  h3:{
    fontSize:"34px",
    marginLeft:"34px",
  },
  name:{
    position:'relative',
    
  },
  price:{
    marginTop:"100px",
    textAlign: "center",
    position: "relative",
  },
  circle:{
    marginLeft:"125px",
    width:"37px",
    height:"37px",
    borderRadius: "50%",
    backgroundColor:"#6ABACE",
    boxShadow: "5px 4px #000000",
  }
});



const ProductView = () => {
  const classes = useStyle();
  return (
    <div className={classes.container3}>
      <h3 className={classes.h3}>Productos</h3>
      <Grid container justifyContent="center" spacing={2} paddingLeft="30px" paddingBottom="40px" paddingRight="20px">
   
       {product_card.map(item=>(
           <Grid item key={item.id}  xs={4} sm={6} md={4} lg={2} className={classes.action}>
            <Card className={classes.root}>
              <CardActionArea className={classes.action}>
               <CardMedia className={classes.media} image={item.thumb} title={item.product_name} />
                <CardContent className={classes.cardContent} >
                   <Typography variant="h5" gutterBottom className={classes.name} >
                   {item.product_name}
                   </Typography>
                   <div className={classes.circle}>
                   <Typography variant="h5"  className={classes.price} gutterBottom >
                  {item.price}€
                  </Typography>
                  </div>
                  </CardContent>
              </CardActionArea >
              </Card>
              </Grid>
    
      ))}
                

      </Grid>
    </div>
  );
};
export default ProductView;
