import mongoose from 'mongoose';
export type User = {
    name:string;
    email:string;
  }

export type ProductCart = {
  id: mongoose.ObjectId
  name: string;
  description: string;
  photo: string;
  price: string;
  amount: number;
}