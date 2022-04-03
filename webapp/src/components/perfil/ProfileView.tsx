import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import DatosPersonales from './DatosPersonales';
import MenuBar from '../comun/MenuBar';
import Pedidos from './Pedidos';
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
  cartItems: ProductCart[]
};
export const ProfileView:React.FC<Props> = ({ cartItems }) => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <MenuBar cartItems={cartItems}/>
      </div>
      <div className={classes.container}>
      <DatosPersonales/>
      </div>
      <div className={classes.container}>
      <Pedidos/>
      </div>
    </React.Fragment>
  );
};




