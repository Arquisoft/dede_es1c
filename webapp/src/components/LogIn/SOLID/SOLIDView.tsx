import { useState } from "react";
import LoginForm from "./LogInForm";
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import { ProductCart } from "../../../shared/shareddtypes";
import {ProfileView} from "../../perfil/ProfileView"
type Props = {
    cartItems: ProductCart[]
  };
//function Authenticator(props: any): JSX.Element
const Authenticator:React.FC<Props> = ({ cartItems}) =>

 {
    //We use this state variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //With this we can control the login status for solid
    const { session } = useSession();

    //We have logged in
    session.onLogin(() => {
        setIsLoggedIn(true)
    })

    //We have logged out
    session.onLogout(() => {
        setIsLoggedIn(false)
    })

    return (
        <>
            <SessionProvider sessionId="log-in-example">
                {(!isLoggedIn) ? <LoginForm /> : <ProfileView cartItems={cartItems}/>} 
            </SessionProvider>
        </>
    );
}

export default Authenticator;