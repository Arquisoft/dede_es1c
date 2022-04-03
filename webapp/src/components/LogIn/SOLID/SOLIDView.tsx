import { useState } from "react";
import LoginForm from "./LogInForm";
import  { ProfileView } from "../../perfil/ProfileView";
import ProfileViewer from "./ProfileViewer"
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import  {HomeView}  from "../../home/HomeView";
import { Product } from "../../../../../restapi/src/products/productModel";
import { ProductCart } from "../../../shared/shareddtypes";


type Props = {
  
    handleAddToCart: (clickedItem: Product) => void;
    cartItems: ProductCart[];
    products:Product[];}
//function Authenticator(props: any): JSX.Element
const Authenticator:React.FC<Props> = ({ cartItems , handleAddToCart,products}) =>

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
                {(!isLoggedIn) ? <LoginForm /> : <HomeView cartItems={cartItems} handleAddToCart={handleAddToCart} products={products}/>} 
            </SessionProvider>
        </>
    );
}

export default Authenticator;