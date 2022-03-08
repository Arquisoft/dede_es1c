import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export enum ROLES {
    NORMAL = 0,
    ADMIN = 10
}

export interface User {
    id: mongoose.ObjectId
    personal_identification: string
    name: string
    surname: string
    password: string
    email: string
    role: number
    phone: number
    country: string
    province: string
    city: string
    zip_code: number
    street: string
    number: number
    floor: number
    floor_number: string

}

// Define the model
const Schema = new mongoose.Schema({
    personal_identification: {
        type: String,
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    password: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    role: {
        type: Number,
        default: ROLES.NORMAL
    },
    phone: {
        type: Number
    },

    country: String,
    province: String,
    city: String,
    zip_code: Number,
    street: String,
    number: Number,
    floor: Number,
    floor_number: String

})

Schema.pre('save', function (next) {
    // get access to user model, then we can use user.email, user.password
    const user: User = this;

    bcrypt.genSalt(10, function (err: Error, salt: string) {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, function (err: Error, hash: string) {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next()
        })
    })
})

// Make use of methods for comparedPassword
Schema.methods.comparedPassword = function (candidatePassword: string, cb: mongoose.Callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, good) {
        if (err) {
            return cb(err, null)
        }
        cb(null, good);
    })
}

// Export the model
export const UserModel = mongoose.model<User>('User', Schema);
