import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';




const useStyle = makeStyles({
  menu: {
    background: "linear-gradient(45deg, #000000 20%, #6ABACE 80%)",
    border: 0,
    boxShadow:"1px 23px 23px 5px rgba(#000000,#000000,#000000, #000000)",
    borderRadius: 30,
    height: 70,
    padding: "0 40px",
    marginTop:"15px",
  },
  icon: {
    marginLeft:"10px",
    marginRight:"20px",
  },
});


const MenuBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyle();

  return (
      <AppBar position="static" className={classes.menu}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>


            <Button to='/' component={Link}  className={classes.icon}>
            <Tooltip title="Home">
              <HomeIcon fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
            </Button>



          <Button to='/Carrito' component={Link} className={classes.icon}> 
            <Tooltip title="Carrito">
              <ShoppingCartIcon   fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </Button>

          <div>
            <IconButton onClick={handleMenu} className={classes.icon}>
              <Tooltip title="Perfil">
                <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
              </Tooltip>
            </IconButton>
            <Menu
              id="menu-appbar"

              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
      
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Menu>
          </div>
          <Button color="inherit" >Login</Button>

        </Toolbar>
      </AppBar>
  );
};
export default MenuBar;
