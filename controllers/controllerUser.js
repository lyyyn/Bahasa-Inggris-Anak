const userRepo = require('../repositories/userRepo.js');
const bcrypt = require('bcrypt');

//Passport
const passport = require('passport');
const initPassport = require('../passport-config');
// initPassport(
// 	passport,
//     userRepo.getOneByEmail(email),
//     userRepo.getOneByID(id)
// );
// app.use(passport.initialize());

// //Session
// const session = require('express-session');
// app.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	resave: false,
// 	saveUninitialized: false
// }));
// app.use(passport.session());

// //Flash
// const flash = require('express-flash');
// app.use(flash());


module.exports = {
    masuk: (req, res) => {
        res.render('fe/user.ejs', {
            type: 'Masuk'
        });
    },
    masukin: () => {
        // passport.authen
    },
    daftar: (req, res) => {
        res.render('fe/user.ejs', {
            type: 'Daftar'
        });
    },
    async daftarPenggunaBaru(req, res) {
        try {
            const hashedSandi = await bcrypt.hash(req.body.sandi, 10);
            // add to database
            const newUser = {
                'Nama': req.body.nama,
                'Email': req.body.email,
                'Sandi': hashedSandi,
                'CreatedDate': new Date(Date.now()).toISOString(),
                'CreatedBy': 'System',
                'UpdatedDate': new Date(Date.now()).toISOString(),
                'UpdatedBy': 'System'
            };
            await userRepo.create(newUser);
            console.log(newUser);
            res.redirect('/masuk');
        } catch {
            res.redirect('/register');
        }
        
    }
};
