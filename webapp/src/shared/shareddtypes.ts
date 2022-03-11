export type User = {
    name:string;
    email:string;
  }

export type Producto = {
    code: string;
    name: string;
    description: string;
    price: number;
    stock: number;
};

export type CarroProducto = {
    producto: Producto;
    unidad: number;
  };
