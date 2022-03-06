import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import Footer from "./components/comun/Footer";


function App(): JSX.Element {
  

  return (
  
    <>
<main>
     <Router>
      <Carrito/>
      <Switch>
        <Route exact path="./HomeView" component={HomeView} />
        <Route  path="./Carrito"render={() => <Carrito/>}/>
      </Switch>
      </Router>
      <Footer/>
      </main>
    </>
    
  );
}

export default App;
