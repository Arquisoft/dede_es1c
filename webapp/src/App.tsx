import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import Producto from "./components/producto/Producto";
import Footer from "./components/comun/Footer";
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import Footer from "./components/comun/Footer";


function App(): JSX.Element {
  

  return (
  
    <>
<main>
     <Router>
 
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route  path="/Carrito"render={() => <Carrito/>}/>
        <Route  path="/Producto"render={() => <Producto/>}/>
      </Switch>
      </Router>
      <Footer/>
      </main>
    </>
    
  );
}

export default App;
