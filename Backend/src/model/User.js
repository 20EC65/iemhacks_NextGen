import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    bloodReport: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BloodTest'
        }
    ]
}, {timestamps: true});

userSchema.pre('save', function(next){
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function () {
    return jwt.sign({id: this._id,name: this.name}, 'secret', {expiresIn: '1d'});
}
const User = mongoose.model('User', userSchema);

export default User;