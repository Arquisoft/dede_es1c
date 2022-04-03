import {
    getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {VCARD} from "@inrupt/vocab-common-rdf";
import React, {ChangeEvent, useEffect} from "react";

 async function retrievePODAddress(webID: string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressProfile = await getThing(myDataSet, urlAddress)
    let ret= getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.region) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.locality) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;
    return ret
  }
//function GetAddress(props: any): JSX.Element 
  type ReviewType = {
    setPrecio: (precio: number)=> void;
    webID: string;

  }
const GetAddress: React.FC<ReviewType>= ({webID}) => {
    const [address, setAddress] = React.useState("");

    const getPODAddress = async () => {setAddress(await retrievePODAddress(webID))
       
    };
    useEffect(() => {
        getPODAddress();
    })


    return (
        <Grid container>
            <Box component="h3" >Address: {address}</Box>
        </Grid>
    );
}

export default GetAddress;