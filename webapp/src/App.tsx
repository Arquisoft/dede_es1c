import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { useState, useEffect} from 'react';

import { Product } from "../../restapi/src/products/model";
import  {getProductos} from './api/api';
import './App.css';

import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import Producto from "./components/producto/Producto";
import Footer from "./components/comun/Footer";
import { ProductCart } from "./shared/shareddtypes";

function App(): JSX.Element {
  const [cartItems,setCartItems]= useState<ProductCart[]>([]);

  const [products, setProducts] = useState<Product[]>([]);

  const refreshProducts = async () => {
    setProducts(await getProductos());
  }
  useEffect(()=>{
    refreshProducts();
  },[]);


  //Añadir al carrito
  const handleAddToCart = (clickedItem: Product) => {
    const existProduct = cartItems.find(item => item.name === clickedItem.name);
     var index:number=0;
      // Hay un producto?
      if (existProduct) {

        return cartItems.map(item => {
       
            if ( item.name === clickedItem.name) {
              const newTodos = [...cartItems];
              const amountt= item.amount+1;
              newTodos[index].amount=amountt; 
              setCartItems(newTodos);
              index=index+1;
            }
            index=index+1;
            return item;
        })
    } else {
      index=index+1;
       const {id, name, photo,description, price } = clickedItem;
       setCartItems([...cartItems, {id, name, photo, price, description,amount:1 }]);

  }
}
  
  return (

    <>
<main>
     <Router>
      <Switch>
        <Route exact path='/' render={() => <HomeView cartItems={cartItems} handleAddToCart={handleAddToCart} products={products}/>} />
        <Route  path="/Carrito"render={() => <Carrito cartItems={cartItems}  />}/>
       <Route  path="/Producto/:name" render={() => <Producto cartItems={cartItems} handleAddToCart={handleAddToCart}/>}/>
      </Switch>
      </Router>
      <Footer/>
      </main>
    </>
    
  );
}

export default App;
