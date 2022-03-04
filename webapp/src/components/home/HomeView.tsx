import React from "react";
import MenuBar from "./MenuBar";
import ProductView from "./ProductView";
import { makeStyles } from "@material-ui/core/styles";

export const HomeView = () => {

  return (
    <React.Fragment>

      <MenuBar />
      <ProductView/>

    </React.Fragment>
  );
};
