// 'Database'
// const guru = require('./models/guru.js');
const path = require('path');

module.exports = {
    adminPanel: (req, res) => {
        res.render('be/dashboard.ejs',{
            sectionName: 'Dashboard'
        });
    },
    guruList: (req, res) => {
        res.render('be/admListing.ejs',{
            sectionName: 'Guru',
            titleColor: 'orange-text text-darken-3',
            buttonColor: 'orange darken-3'
        });
    },
    guruAdd: (req, res) => {
        res.render('be/edit.ejs',
            {
                sectionName: 'Guru',
                type:'Add'
            });
    },
    guruEdit: (req, res) => {
        res.render('be/edit.ejs',
            {
                sectionName: 'Guru',
                type:'Edit',
                idx:'/' + req.params.idx
            });
    },
    guruCreate: (req, res) => {
        // add to database
        // guru.push(req.body);
        // res.redirect('/guruList');
        res.send('guru Added');
    },
    guruUpdate: (req, res) => {
        // add our form data to our Array Data
        // guru[req.params.idx] = (req.body);
        // res.redirect('/guruList');
        res.send('guru Updated');
    },
    guruDelete: (req, res) => {
        // add our form data to our Array Data
        // guru.splice(req.params.idx, 1);
        // res.redirect('/guruList');
        res.send('guru Delete');
    },

};
