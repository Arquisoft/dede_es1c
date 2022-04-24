import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import DatosPersonales from './DatosPersonales';
import MenuBar from '../comun/MenuBar';
import Pedidos from './Pedidos';
import { ProductCart } from '../../shared/shareddtypes';
import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";

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
export const ProfileView:React.FC<Props> = ({ cartItems}) => {
  const classes = useStyle();
  const { session } = useSession();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <MenuBar cartItems={cartItems}/>
      </div>
      <div className={classes.container}>
      {session.info.webId ? (
      <DatosPersonales webID={session.info.webId}/>
      ): null }
      </div>
      <div className={classes.container}>
      {session.info.webId ? (
      <Pedidos webID={session.info.webId}/>
      ): null }
      </div>
    </React.Fragment>
  );
};




