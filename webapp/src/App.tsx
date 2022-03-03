import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import './App.css';

function App(): JSX.Element {

  return (
    <>
     <Router>
      <HomeView/>
      <Switch>
        <Route exact path="./HomeView" component={HomeView} />
        <Route  path="./Carrito"render={() => <Carrito/>}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
