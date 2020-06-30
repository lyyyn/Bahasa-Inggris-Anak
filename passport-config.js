const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = {
    initialize: (passport, getUserByEmail, getUserById) => {
        const authenticateUser = async (email, sandi, done) => {
            const pengguna = getUserByEmail(email);
            if (pengguna === null) {
                return done(null, false, { message: 'Pengguna dengan email tersebut tidak terdaftar.' });
            }
            try {
                if (await bcrypt.compare(sandi, pengguna.sandi)) {
                    return done(null, pengguna);
                } else {
                    return done(null, false, { message: 'Kata sandi Anda salah.' })
                }
            } catch (e) {
                return done(e);
            }
        }

        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'sandi'
        }, authenticateUser));
        passport.serializeUser((pengguna, done) => done(null, user._id));
        passport.deserializeUser((_id, done) => {
            return done(null, getUserById(_id))
         });
    }
}