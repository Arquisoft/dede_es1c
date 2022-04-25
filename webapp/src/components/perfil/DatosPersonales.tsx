import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, TextField} from "@mui/material";
import { Directions, Email, Person} from "@material-ui/icons";
import { Grid } from "@material-ui/core"
import { Typography } from "@material-ui/core";
import { VCARD } from "@inrupt/lit-generated-vocab-common";
import {
  getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";

const useStyle = makeStyles({
  datosPersonales: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "30px 50px 60px 50px",
    boxSizing:"border-box",
    backgroundColor: "#6ABACE", 
    borderColor: "#2B73DB"
  },
  direccion: {
    width: "100%",
  },
  etiquetas: {
    textAlign: "center",
    width: "100%",
  },
  boton: {
    color: "4D8AE2",
  },
  formulario: {
    display:"grid",
    font: "400 1em Tahoma,sans-serif",
    backgroundColor:"#FFFF",
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"10%",
    marginRight: "10%",
    textAlign: "center",
    color: "#513280",
  }
});

async function retrievePODAddress(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
  let addressProfile = await getThing(myDataSet, urlAddress)
  let ret= getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string+" "+
  getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string+" "+
  getStringNoLocale(addressProfile as Thing, VCARD.locality) as string+" "+
  getStringNoLocale(addressProfile as Thing, VCARD.region) as string+" "+
  getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string;
  return ret
}

async function retirevePODName(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let name = getStringNoLocale(profile as Thing, VCARD.fn.iri.value) as string;
  return name;
}

async function retirevePODEmail(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let email = getStringNoLocale(profile as Thing, VCARD.note.iri.value) as string;
  return email;
}

type ReviewType = {
  webID: string;
}

const DatosPersonales: React.FC<ReviewType> = ({webID}) => {

  const [address, setAddress] = React.useState("");
  const getPODAddress = async () => {setAddress(await retrievePODAddress(webID));
  };
  useEffect(() => {
      getPODAddress();
  })
  const [name, setName] = React.useState("");
  const getPODName = async () => {setName(await retirevePODName(webID));
  };
  useEffect(() => {
      getPODName();
  })
  const [email, setEmail] = React.useState("");
  const getPODEmail = async () => {setEmail(await retirevePODEmail(webID));
  };
  useEffect(() => {
      getPODEmail();
  })
  const classes = useStyle();
  return (
    <div className={classes.formulario}>
        <Grid container alignItems="center" direction="column" justify="space-between" style={{padding: 20}}> 
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, minWidth: 200}}>
            <Grid container justify="center">
                <img src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png" width={150}/>    
            </Grid>
            <Typography variant="h5">¡Bienvenido!</Typography>
            <TextField label="Nombre" margin="normal" contentEditable="false" value={name} InputProps={{startAdornment: <InputAdornment position="start"><Person/></InputAdornment>}}/>
            <div style={{height: 20, width: 500}}/>
            <TextField label="Correo asociado" margin="normal" contentEditable="false" variant="outlined" value={email} InputProps={{startAdornment: <InputAdornment position="start"><Email/></InputAdornment>}}/>
            <div style={{height: 20}}/>
            <TextField label="Direccion de envio asociada" margin="normal" contentEditable="false" variant="outlined" value={address} InputProps={{startAdornment: <InputAdornment position="start"><Directions/></InputAdornment>}}/>
            <div style={{height: 20}}/> 
            </div>
        </Grid>
    </div>
  );
}

export default DatosPersonales;