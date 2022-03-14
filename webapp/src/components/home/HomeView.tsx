import React, { useState, useEffect} from 'react';

import MenuBar from "../comun/MenuBar";
import ProductView from "./ProductView";
import Icon from "./Icon";

import { makeStyles } from "@material-ui/core/styles";

import { Product } from "../../../../restapi/src/products/model";
import  {getProductos} from '../../api/api';


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

export const HomeView = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const refreshProducts = async () => {
    setProducts(await getProductos());
  }
  useEffect(()=>{
    refreshProducts();
  },[]);

  const classes = useStyle();
  return (
    <React.Fragment>
        <div className={classes.container}>
      <MenuBar />
      <ProductView products={products} />
      </div>
      <Icon/>
    </React.Fragment>
  );
};
