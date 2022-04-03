import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function LoginForm(): JSX.Element {

    const [idp, setIdp] = useState("https://inrupt.net");
    const [currentUrl, setCurrentUrl] = useState("https://localhost:3000");
  
    const useStyle = makeStyles({
      container: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "30px 50px 60px 50px",
          boxSizing:"border-box",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          borderRadius: 30,
      },
    });

    useEffect(() => {
      setCurrentUrl(window.location.href);
    }, [setCurrentUrl]);
    
    const classes = useStyle();

    return (
        <div className={classes.container}>
          <Container fixed>
          <FormGroup>
          <TextField
            label="Link de nuestro provedor de PODs"
            placeholder="Link"
            type="url"
            value={idp}
            onChange={(e) => setIdp(e.target.value)}
            InputProps={{
              endAdornment: (
                <LoginButton oidcIssuer={idp} redirectUrl={currentUrl}>
                  <Button variant="contained" color="primary">
                    Login
                    </Button>
                </LoginButton>
              ),
              }}
            />
          </FormGroup>
        </Container>
        </div>
    );
}

export default LoginForm;