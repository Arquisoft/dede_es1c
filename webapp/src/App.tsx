import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import './App.css';


function App(): JSX.Element {
  

  return (
  
    <>
<main>
     <Router>
       
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route  path="/Carrito"render={() => <Carrito/>}/>
      </Switch>
      </Router>
      </main>
    </>
    
  );
}

export default App;
