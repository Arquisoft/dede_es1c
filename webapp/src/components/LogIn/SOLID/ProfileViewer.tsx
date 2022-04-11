import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import { VCARD } from "@inrupt/lit-generated-vocab-common";
import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import GetAddress from "./GetAddress";


const ProfileViewer = () =>{
  const { session } = useSession();
  const [addr, setAddr] = React.useState("");

  return (
    <Container fixed>
      {session.info.webId ? (
        <CombinedDataProvider 
          datasetUrl={session.info.webId} 
          thingUrl={session.info.webId}>
        <Card style={{ maxWidth: 480 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Text property={VCARD.fn.iriAsString} />
            </Typography>
             <Typography gutterBottom variant="h5" component="h2"> 
              <Text property={VCARD.note.iri.value}/>
            </Typography>
            <Typography gutterBottom variant="h5" component="h2"> 
              <GetAddress webID={session.info.webId}/>
            </Typography>
          </CardContent>
        </Card>
      </CombinedDataProvider>
      ): null } 
             

      <LogoutButton >
        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
          Logout
        </Button>
      </LogoutButton>


    </Container>
  );
}

export default ProfileViewer;