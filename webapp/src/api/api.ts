
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

/* export async function addCart( p:Product):Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/user'
  
  let response = await fetch(apiEndPoint+'/product', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'id':p.id,
                           })
    });
  if (response.status===200)
    return true;
  else
    return false;

} */
export async function loginUsuario(u:User):Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000'
  let response = await fetch(apiEndPoint+'/login', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'email':u.email,"password":u.password,
                         })
  });
  console.log(response.body);
  if (response.status===200)
  return true;
else
  return false;
}

export async function removeCart():Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(apiEndPoint+'/');

  return response.json();
}

export async function eliminarStock(p:Product):Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  var id=p.id
  let response = await fetch(`${apiEndPoint}/stock/${""+id}`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'stock':Number(p.stock)-1,
                         })
  });

  if (response.status===200)
  return true;
else
  return false;
}


export async function anadirStock(p:Product):Promise<boolean>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  var id=p.id
  let response = await fetch(`${apiEndPoint}/stock/${""+id}`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'stock':Number(p.stock)+1,
                         })
  });

  if (response.status===200)
  return true;
else
  return false;
}



export async function getProducto(name:string):Promise<Product>{ 
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:8000/product'
  let response = await fetch(`${apiEndPoint}/${name}`);
  return await response.json();

}
