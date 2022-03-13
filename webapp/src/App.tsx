import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import { ProfileView } from "./components/perfil/ProfileView";
import { LogInView } from "./components/LogIn/LogInView";
import { PaymentView } from "./components/Pago/PaymentView";
import Footer from "./components/comun/Footer";



function App(): JSX.Element {
  

  return (
    <>
    <main>
    <Router>
       <PaymentView/>
     </Router>
     </main>
   </>
  );
}

export default App;
