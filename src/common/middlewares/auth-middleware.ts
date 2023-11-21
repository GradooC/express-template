import passport from 'passport';
import {
    ExtractJwt,
    Strategy,
    StrategyOptions,
    VerifyCallback,
} from 'passport-jwt';

const options: StrategyOptions = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const verifyCallback: VerifyCallback = (payload, done) => {
    try {
        return done(null, payload.user);
    } catch (error) {
        done(error);
    }
};

export const jwtStrategy = new Strategy(options, verifyCallback);
export const authMiddleware = passport.authenticate('jwt', { session: false });
