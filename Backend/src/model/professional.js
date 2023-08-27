import mongoose from 'mongoose';

const professionalModel = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    email : {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    currAddress : {
        type: String
    },
    age: {
        type: Number
    },
    expertise : {
        type: String
    }
}, {timestamps: true});

const Professional = mongoose.model('Professional', professionalModel);

export default Professional;