import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV != 'production') {
    dotenv.config({path: path.resolve(__dirname, '.env')});
}

const config = {
    jwt_secret: process.env.JWT_SECRET || 'unsafe_jwt_secret',
    mongoose: {
        uri: 'mongodb+srv://uo278485:1234@cluster0.35zkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },
}

export default config;
