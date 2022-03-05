
import React from "react";
import MenuBar from "../home/MenuBar";
import Footer from "../home/Footer";
import Icon from "../home/Icon";
import CarritoView from "./CarritoView";
import { makeStyles } from "@material-ui/core/styles";

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
  
  });
export const Carrito = () => {
    const classes = useStyle();
    return (
    <React.Fragment>
    <div className={classes.container}>
      <MenuBar />
      <CarritoView/>
      </div>
      <Icon/>
      <Footer/>
    </React.Fragment>
    );
};