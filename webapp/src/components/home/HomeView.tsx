import React, { useState, useEffect} from 'react';

import MenuBar from "../comun/MenuBar";
import ProductView from "./ProductView";
import Icon from "./Icon";

import { makeStyles } from "@material-ui/core/styles";

import { Product } from "../../../../restapi/src/products/model";
import { ProductCart } from '../../shared/shareddtypes';



const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  height: "100%",
  padding: "30px 50px 60px 50px",
  boxSizing:"border-box",
  },

});
type Props = {
  handleAddToCart: (clickedItem: Product) => void;
  cartItems: ProductCart[];
  products:Product[];

};


export const HomeView:React.FC<Props> = ({ cartItems , handleAddToCart,products})=> {


  const classes = useStyle();
  return (
    <React.Fragment>
        <div className={classes.container}>
      <MenuBar cartItems={cartItems}/>
      <ProductView props={products} handleAddToCart={handleAddToCart}/>
      </div>
      <Icon/>
    </React.Fragment>
  );
};
