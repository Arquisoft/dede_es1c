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
    position: "relative",
    font: "400 1em Tahoma,sans-serif",
    backgroundColor:"#FFFF",
    minWidth: 600,
    borderRadius: 30,
    boxShadow: "7px 6px rgba(0, 0, 0, .5)",
    marginLeft:"10%",
    marginRight: "10%",
    textAlign: "center",
    color: "#513280",
  },
  disable: {
    ".MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#000",
      color: "#000"
    }
  }
});

async function retrievePODAddress(webID: string): Promise<string> {
  let profileDocumentURI = webID.split("#")[0]
  let myDataSet = await getSolidDataset(profileDocumentURI)
  let profile = getThing(myDataSet, webID)
  let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
  if(urlAddress === null) {
    return "";
  } else  {
    let addressProfile = await getThing(myDataSet, urlAddress)
    let ret= getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.locality) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.region) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string;
    return ret
  }
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


  const [address, setAddress] = React.useState("Direccion");
  const [errorsAddres,setErrorsAddress] = React.useState<{address: string}>();
  const getPODAddress = async () => {
    let a = await retrievePODAddress(webID);
    if(a === "") {
      setAddress("ERROR: POD SIN DIRECCION");
      setErrorsAddress({address: 'Esta aplicacion requiere de un POD con una direccion en el'});
    } else {
      setAddress(a);
    }
    
  };
  useEffect(() => {
      getPODAddress();
  })
  const [name, setName] = React.useState("Name");
  const [errorsName,setErrorsName] = React.useState<{name: string}>();
  const getPODName = async () => {
    let n = await retirevePODName(webID);
    if(n === null || n == "") {
      setName("ERROR: POD SIN NOMBRE COMPLETO");
      setErrorsName({name: 'Esta aplicacion requiere de un POD con un nombre en el'});
    } else {
      setName(n);
    }
    
  };
  useEffect(() => {
      getPODName();
  })
  const [email, setEmail] = React.useState("Email");
  const [errorsEmail,setErrorsEmail] = React.useState<{email: string}>();
  const getPODEmail = async () => {
    let e = await retirevePODEmail(webID);
    if(e === null) {
      setEmail("ERROR: POD SIN EMAIL");
      setErrorsEmail({email: 'Esta aplicacion requiere de un POD con un email en el (ubicado en notas)'});
    } else {
      setEmail(e);
    }
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
                <img src="https://drive.google.com/uc?export=view&id=1ckatCm03YBWhjTubSxD4TLESZqB4zLP-" width={150}/>    
            </Grid>
            <Typography variant="h5">¡Bienvenido!</Typography>
            <TextField label="Nombre" error={Boolean(errorsName?.name)} helperText={(errorsName?.name)} margin="normal" contentEditable="false" value={name} InputProps={{startAdornment: <InputAdornment position="start"><Person/></InputAdornment>}}/>
            <div style={{height: 20, width: 500}}/>
            <TextField label="Correo asociado" error={Boolean(errorsEmail?.email)} helperText={(errorsEmail?.email)} margin="normal" contentEditable="false" variant="outlined" value={email} InputProps={{startAdornment: <InputAdornment position="start"><Email/></InputAdornment>}}/>
            <div style={{height: 20}}/>
            <TextField label="Direccion de envio asociada" error={Boolean(errorsAddres?.address)} helperText={(errorsAddres?.address)}  margin="normal" contentEditable="false" variant="outlined" value={address} InputProps={{startAdornment: <InputAdornment position="start"><Directions/></InputAdornment>}}/>
            <div style={{height: 20}}/> 
            </div>
        </Grid>
    </div>
  );
}

export default DatosPersonales;