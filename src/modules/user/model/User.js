import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    googleAuthenticated: {
        type: Boolean,
        required: true,
        unique: false,
        index: false,
        default: false
    }, 
    firstname: {
        type: String,
        required: true,
        unique: false,
        index: false,
    }, 
    surname: {
        type: String,
        required: true,
        unique: false,
        index: false,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
    }, 
    birthdate: {
        type: String,
        required: true,
        unique: false,
        index: false,
    }, 
    password: {
        type: String,
        required: true,
        unique: false,
        index: false,
    }
})

const User = mongoose.model('User', UserSchema)

export default User