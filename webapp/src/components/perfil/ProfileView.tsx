import React, {useEffect, useState} from 'react';

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
    /* istanbul ignore next */
async function retirevePODEmail(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let email = getStringNoLocale(profile as Thing, VCARD.note.iri.value) as string;
  return email;
}
    /* istanbul ignore next */
export const ProfileView:React.FC<Props> = ({ cartItems}) => {
  const classes = useStyle();
  const { session } = useSession();

  const [email, setEmail] = React.useState("");
  const [pedidos, setPedidos] = useState<Order[]>([]);
    /* istanbul ignore next */
  const getPedidosEmail = async () => {
    if(email === "") {
      let e = await retirevePODEmail(session.info.webId!);
      setEmail(e);
      let ped = await getPedidos(e);
      setPedidos(ped);
    }
  }
 useEffect(() => {
  getPedidosEmail();
},[] );
  


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

      {session.info.webId ?  (
      <Pedidos webID={session.info.webId} ped={pedidos}/>
      ): null }  

      </div>
    </React.Fragment>
  );
};



