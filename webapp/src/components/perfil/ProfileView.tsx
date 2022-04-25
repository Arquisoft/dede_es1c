import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import DatosPersonales from './DatosPersonales';
import MenuBar from '../comun/MenuBar';
import Pedidos from './Pedidos';
import { Order, ProductCart } from '../../shared/shareddtypes';
import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { VCARD, FOAF } from "@inrupt/lit-generated-vocab-common";
import {getSolidDataset, getStringNoLocale, getThing, Thing, getUrl} from "@inrupt/solid-client";
import { getPedidos } from '../../api/api';

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

async function retirevePODEmail(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let email = getStringNoLocale(profile as Thing, VCARD.note.iri.value) as string;
  return email;
}

export const ProfileView:React.FC<Props> = ({ cartItems}) => {
  const classes = useStyle();
  const { session } = useSession();
  
  const [email, setEmail] = React.useState("");
  const [pedidos, setPedidos] = useState<Order[]>([]);

  const getPedidosEmail = async () => {
    if(email == "") {
      let e = await retirevePODEmail(session.info.webId!);
      setEmail(e);
      let ped = await getPedidos(e);
      setPedidos(ped);
      console.log('fetched data',pedidos.length);
    }
  }
  useEffect(() => {
    getPedidosEmail();
    let ped = pedidos;
  })

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
      <Pedidos webID={session.info.webId} ped={pedidos}/>
      ): null }
      </div>
    </React.Fragment>
  );
};




