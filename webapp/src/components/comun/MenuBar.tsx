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
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { ProductCart } from "../../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const useStyle = makeStyles({
  menu: {
    background: "linear-gradient(45deg, #19275a 10%, #3a4c8e 30% ,#cc90ff 50% ,#634280 80%)",
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
  logo: {
    width:"10%",
   marginTop:"30px",

  },
});

type Props = {
  cartItems: ProductCart[];
};

const getTotalItems = (items: Props) =>
items.cartItems.reduce((ack: number, item) => ack + item.amount, 0);

const MenuBar:React.FC<Props> = (cartItems) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyle();



  const { session } = useSession();
  


  return (

      <AppBar position="static" className={classes.menu} >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://i.postimg.cc/yxpLW6CX/imageedit-1-3048145247.png" alt="logo" className={classes.logo}/>
          </Typography>

            <Button to='/' component={Link}  className={classes.icon}>
            <Tooltip title="Home">
              <HomeIcon fontSize="large" sx={{ color: "white" ,flexGrow: 1}} />
            </Tooltip>
            </Button>



          <Link className={classes.icon} to= "/Carrito" > 
            <Tooltip title="Carrito">
            <StyledBadge  badgeContent={getTotalItems(cartItems)} sx={{ color: 'white' }}>
              <ShoppingCartIcon   fontSize="large" sx={{ color: "white" ,flexGrow: 1}} />
              </StyledBadge >
            </Tooltip>

          </Link>

             {session.info.isLoggedIn ? (
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
              <MenuItem to='/Perfil' component={Link}>Perfil</MenuItem>
              <MenuItem >Sign out</MenuItem>
            </Menu>
          </div>  ):(
   
          <Button to='/LogIn' component={Link} color="inherit" >Login</Button>
          )}

        </Toolbar>
      </AppBar>
  );
};
export default MenuBar;
