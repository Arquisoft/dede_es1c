import mongoose from 'mongoose';


export interface Order {
    id: string;
    email: string;
    fecha: string;
    name: string;
    description: string;
    photo: string;
    price: string;
    amount: number;
}

// Define the model
const Schema = new mongoose.Schema({
    email: {
        type: String,
    },
    fecha: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    photo: {
        type: String,
    },
    price: {
        type: String,
    },
    amount: {
        type: Number,
    }
})
// Export the model
export const OrderModel = mongoose.model<Order>('Order', Schema);