import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import { makeStyles } from "@material-ui/core/styles";
import './App.css';

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  height: "100%",
  padding: "30px 50px 60px 50px",
  boxSizing:"border-box",
  backgroundColor: "#6ABACE", 
  },

});
function App(): JSX.Element {
  
  const classes = useStyle();
  return (
  
    <>
<main>
     <Router>
       <div className={classes.container}>
      <HomeView/>
      <Switch>
        <Route exact path="./HomeView" component={HomeView} />
        <Route  path="./Carrito"render={() => <Carrito/>}/>
      </Switch>
      </div>
 
      </Router>
      </main>
    </>
    
  );
}

export default App;
