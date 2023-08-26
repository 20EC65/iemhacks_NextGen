import JWT from 'passport-jwt';
import User from '../model/user.js';

const JWTStartegy = JWT.Strategy;
const extractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

export const passportAuth = (passport) => {
    passport.use(new JWTStartegy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user) {
            done(null, false);
        }else{
            done(null, user);
        }
    }));
}