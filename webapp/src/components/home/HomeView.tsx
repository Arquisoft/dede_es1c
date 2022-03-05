import React from "react";
import MenuBar from "./MenuBar";
import ProductView from "./ProductView";
import Footer from "./Footer";
import Icon from "./Icon";
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
export const HomeView = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
        <div className={classes.container}>
      <MenuBar />
      <ProductView/>
      </div>
      <Icon/>
      <Footer/>
    </React.Fragment>
  );
};
