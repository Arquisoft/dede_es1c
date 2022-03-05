
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Container,Typography} from "@material-ui/core";
const useStyle = makeStyles({
  title: {

    marginTop:"3%",
    backgroundColor:"#FFFF",
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"10%",
    marginRight:"12%",
   
  },
});
const CarritoView = () => {
  const classes = useStyle();
    return (
      <Container  className={classes.title} >
        <Typography variant="h5" gutterBottom>
                Carrito
        </Typography>
      </Container>

    );

};
export default CarritoView;