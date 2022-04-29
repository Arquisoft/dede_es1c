import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { ProductCart } from '../../../shared/shareddtypes';
import React from 'react';
import MenuBar from "../../comun/MenuBar";
function LoginForm(): JSX.Element {
  type Props = {
    cartItems: ProductCart[]
  };

    const [idp, setIdp] = useState("https://inrupt.net");
    const [currentUrl, setCurrentUrl] = useState("https://localhost:3000");
  
    const useStyle = makeStyles({
      container2: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "30px 50px 60px 50px",
        boxSizing:"border-box",
    },
  
      container: {
          display: "flex",
          flexDirection: "column",
          width:"40%",
          height: "20%",
          padding: "30px 50px 60px 50px",
          boxSizing:"border-box",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          borderRadius: 30,
          position: "fixed",
          top: "50%",
          left: "50%",
          /* bring your own prefixes */
          transform: "translate(-50%, -50%)",
          boxShadow: " 16px 11px 9px rgba(0, 0, 0, .5)",
      },
      center:{
        width:"50%",
        position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)" ,
      },
      button:{
        width:"20%",
        position: "absolute",
    top: "75%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)" ,
    background: "linear-gradient(45deg, #19275a 30%, #cc90ff 90%)",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, .6)",

      },
    });

    useEffect(() => {
      setCurrentUrl(window.location.href);
    }, [setCurrentUrl]);
    
    const classes = useStyle();

    return (
      <React.Fragment>
      <div className={classes.container2}>
            <MenuBar cartItems={[]}/>
       </div>
        <div className={classes.container}>
          <Container fixed>
          <FormGroup>
          <TextField className={classes.center}
           disabled
            label="Link de nuestro provedor de PODs"
            placeholder="Link"
            type="url"
            value={idp}
            onChange={(e) => setIdp(e.target.value)}
            />
                <LoginButton  oidcIssuer={idp} redirectUrl={currentUrl} >
                  <Button variant="contained" color="primary"  className={classes.button}>
                    Login
                    </Button>
                </LoginButton>
          </FormGroup>
        </Container>
        </div>
        </React.Fragment>
    );
}

export default LoginForm;