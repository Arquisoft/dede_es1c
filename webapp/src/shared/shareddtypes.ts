export type User = {
    name:string;
    email:string;
  }

export type Producto = {
  id: string
  photo: string
  name: string
  price: string
  stock: string
};

export type ProductCart = {
  producto:Producto
  cantidad: number
}