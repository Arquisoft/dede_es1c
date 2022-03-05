import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography} from "@mui/material";




const useStyle = makeStyles({
    stickToBottom: {
      width: '100%',
      position: 'relative',
      bottom: 0,
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      textAlign: "center",
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
