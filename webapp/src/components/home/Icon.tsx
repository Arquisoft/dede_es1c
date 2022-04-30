import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";




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
      "&:hover ": {
        backgroundColor: "transparent",

      },
    },

    icon:{
  
      fontSize: "100px",
      lineHeight: "60px",
      transition: ".6s",
      color: "#000",
      "&:hover ": {
        transform: "translate(0, -7px)",
        background: "linear-gradient(45deg, #19275a 30%, #cc90ff 90%)",
        color: "white",
      },
      position: "relative",
      display: "block",
      borderRadius: "50px",
      background:" #ffffff",
      textAlign: "center",   
      boxShadow:"6px 5px rgba(0, 0, 0, .6)",
    },
    
});



const Icon = () => {
  const classes = useStyle();

  return (
 <div className="menu-social-links">
 <ul className={classes.ul}>
  <IconButton aria-label="git" className={classes.li} onClick={event =>  window.location.href='https://github.com/Arquisoft/dede_es1c'}>
  <GitHubIcon className={classes.icon} style={{ fontSize: 40 }}  />
  </IconButton>
  <IconButton  aria-label="doc" className={classes.li}  onClick={event =>  window.location.href='https://arquisoft.github.io/dede_es1c/'}>
  <ArticleIcon  className={classes.icon} style={{ fontSize: 40 }}   />
  </IconButton>
  <IconButton className={classes.li} to='/' component={Link}>
  <HomeIcon   className={classes.icon} style={{ fontSize: 40 }}   />

  </IconButton>
  </ul>
</div>


  );
};
export default Icon;
