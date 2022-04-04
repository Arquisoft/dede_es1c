import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography} from "@mui/material";




const useStyle = makeStyles({
    stickToBottom: {
      position:"fixed",
      bottom:"0",
      width:"100%",
      height:"60px",   /* Height of the footer */
      background:"#6cf",
      borderTopLeftRadius: 20,
      borderTopRightRadius:20,
      "@media (max-width:560px)":{
        position:"fixed",
        width: "100%",
        marginTop: "30px",
       
      }
    },
});



const Footer = () => {
  const classes = useStyle();
  return (
    <Box >
    <BottomNavigation className={classes.stickToBottom}>
        <Typography variant="h5" marginTop="10px">
            Universidad de Oviedo
          </Typography>
        </BottomNavigation>
    </Box>
  );
};
export default Footer;
