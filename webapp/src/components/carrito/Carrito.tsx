
import React, { useEffect } from "react";

import Footer from "../comun/Footer";
import Icon from "../home/Icon";

import { makeStyles } from "@material-ui/core/styles";
import {
  getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";
import { VCARD} from "@inrupt/lit-generated-vocab-common";

import CarritoView from "./CarritoView";
import MenuBar from "../comun/MenuBar";
import { ProductCart } from "../../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";

const useStyle = makeStyles({
    container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "30px 50px 60px 50px",
    boxSizing:"border-box",
    backgroundColor: "transparent", 
    },
  
  });

  type Props = {
    cartItems: ProductCart[];
    handleRemoveFromCart: (clickedItem: ProductCart) => void;
  };
  async function retrievePODAddress(webID: string): Promise<string> {

    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressProfile = await getThing(myDataSet, urlAddress)
    let ret= getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;
    let locality = getStringNoLocale(addressProfile as Thing, VCARD.locality) as string;
    let region= getStringNoLocale(addressProfile as Thing, VCARD.region) as string;
    let postal_code= getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string;
    let addresses:string=`${ret} - ${locality}, ${region} - ${postal_code}`;
    return addresses;
  }

export const Carrito: React.FC<Props> = ({ cartItems, handleRemoveFromCart}) => {
    const classes = useStyle();
    const { session } = useSession();
  
    const [address, setAddress] = React.useState("");


    const getPODAddress = async () => {
      setAddress(await retrievePODAddress(session.info.webId!))
    }
    useEffect(() => {
      if(session.info.isLoggedIn)
        getPODAddress();
    })

    return (
    <React.Fragment>
    <div className={classes.container}>
      <MenuBar cartItems={cartItems}/>

      <CarritoView props={cartItems} handleRemoveFromCart={handleRemoveFromCart} address={address}/>

      </div>
    </React.Fragment>
    );
};