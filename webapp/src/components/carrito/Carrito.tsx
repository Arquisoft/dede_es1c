
import React from "react";

import Footer from "../comun/Footer";
import Icon from "../home/Icon";

import { makeStyles } from "@material-ui/core/styles";

import { Product } from "../../../../restapi/src/products/model";
import CarritoView from "./CarritoView";
import MenuBar from "../comun/MenuBar";
import { ProductCart } from "../../shared/shareddtypes";

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

  type Props = {
    cartItems: ProductCart[];
    handleRemoveFromCart: (clickedItem: ProductCart) => void;
  };

export const Carrito: React.FC<Props> = ({ cartItems, handleRemoveFromCart }) => {
    const classes = useStyle();
    return (
    <React.Fragment>
    <div className={classes.container}>
      <MenuBar cartItems={cartItems}/>
      <CarritoView props={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>
      </div>
    </React.Fragment>
    );
};