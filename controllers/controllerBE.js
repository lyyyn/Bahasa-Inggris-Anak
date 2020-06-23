const guruRepo = require('../repositories/guruRepo');
const path = require('path');

module.exports = {
    adminPanel: (req, res) => {
        res.render('be/dashboard.ejs', {
            sectionName: 'Dashboard',
            textColor: 'red-text text-darken-4',
            sectionColor: 'red darken-4'
        });
    },
    async guruList(req, res) {
        const items = await guruRepo.getAll();
        return res.render('be/admListing.ejs', {
            items,
            sectionName: 'Guru',
            textColor: 'orange-text text-darken-3',
            sectionColor: 'orange darken-3'
        });
    },
    guruAdd: (req, res) => {
        res.render('be/edit.ejs',
            {
                sectionName: 'Guru',
                type: 'Add'
            });
    },
    guruEdit: (req, res) => {
        res.render('be/edit.ejs',
            {
                sectionName: 'Guru',
                type: 'Edit',
                idx: '/' + req.params.idx
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
