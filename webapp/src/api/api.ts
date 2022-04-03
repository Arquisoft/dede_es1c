
import { Product } from "../../../restapi/src/products/productModel";
import { User } from "../../../restapi/src/users/userModel";
import { ProductCart } from "../shared/shareddtypes";


export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/'
    let response = await fetch(apiEndPoint+'/');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getProductos():Promise<Product[]>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(apiEndPoint+'/');

  return response.json();
}

export async function addCart( p:Product):Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  const getJSON = () => {
    return JSON.stringify({'quantity': p.name,'id_product':p.id, 'id_order':p.id});
  }
    let response = fetch(apiEndPoint+'/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: getJSON()
    });

  return true;
}

export async function removeCart():Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(apiEndPoint+'/');

  return response.json();
}

export async function getProducto(name:string):Promise<Product>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(`${apiEndPoint}/${name}`);
  return await response.json();

}
