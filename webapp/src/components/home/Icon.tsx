import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@mui/material/IconButton";



const useStyle = makeStyles({
    body: {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
    },
    ul:{
      display: "block",
      position: "fixed",
      top: "75%",
      left: "96%",
      transform: "translate(-50%)",
      padding: "0",
    },
    li:{
      listStyle: "none",
      margin: "15px 0px",
    },

    icon:{
      textDecoration:"none",
      fontSize: "100px",
      lineHeight: "60px",
      transition: ".6s",
      color: "#000",
      "&:hover ": {
        transform: "translate(0, -7px)",
        background: "linear-gradient(315deg, #28313b 0%, #6ABACE  74%)",
        color: "white",
      },
      position: "relative",
      display: "block",
      borderRadius: "50px",
      background:" #ffffff",
      textAlign: "center",   
      boxShadow:"0 6px 5px rgba(0, 0, 0, .6)",
    },
    
});



const Icon = () => {
  const classes = useStyle();

  return (
 <div className="menu-social-links">
 <ul className={classes.ul}>
  <IconButton className={classes.li}>
  <GitHubIcon className={classes.icon} style={{ fontSize: 40 }} onClick={event =>  window.location.href='https://github.com/Arquisoft/dede_es1c'} />
  </IconButton>
  <IconButton className={classes.li}>
  <ArticleIcon className={classes.icon} style={{ fontSize: 40 }}  onClick={event =>  window.location.href='https://arquisoft.github.io/dede_es1c/'}  />
  </IconButton>
  <IconButton className={classes.li}>
  <HomeIcon className={classes.icon} style={{ fontSize: 40 }} />
  </IconButton>
  </ul>
</div>


  );
};
export default Icon;
