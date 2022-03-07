import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import { ProfileView } from "./components/perfil/ProfileView";


function App(): JSX.Element {
  

  return (
  
    <>
<main>
     <Router>
        <ProfileView/>
      </Router>
      </main>
    </>
    
  );
}

export default App;
