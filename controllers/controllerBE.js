const guruRepo = require('../repositories/guruRepo');
const DASHBOARD_TEXT_COLOR = 'red-text text-darken-4';
const DASHBOARD_SECTION_COLOR = 'red darken-4';
const GURU_SECTION_NAME = 'Guru';
const GURU_TEXT_COLOR = 'orange-text text-darken-3';
const GURU_SECTION_COLOR = 'orange darken-3';

module.exports = {
    adminPanel: (req, res) => {
        res.render('be/dashboard.ejs', {
            sectionName: 'Dashboard',
            textColor: DASHBOARD_TEXT_COLOR,
            sectionColor: DASHBOARD_SECTION_COLOR
        });
    },
    async guruList(req, res) {
        const items = await guruRepo.getAll();
        return res.render('be/admListing.ejs', {
            items,
            sectionName: GURU_SECTION_NAME,
            textColor: GURU_TEXT_COLOR,
            sectionColor: GURU_SECTION_COLOR
        });
    },
    guruAdd: (req, res) => {
        res.render('be/edit.ejs',
            {
                sectionName: GURU_SECTION_NAME,
                type: 'Add',
                textColor: GURU_TEXT_COLOR,
                sectionColor: GURU_SECTION_COLOR
            });
    },
    guruEdit: (req, res) => {
        res.render('be/edit.ejs',
            {
                sectionName: GURU_SECTION_NAME,
                type: 'Edit',
                idx: '/' + req.params.idx,
                textColor: GURU_TEXT_COLOR,
                sectionColor: GURU_SECTION_COLOR
            });
    },
    async guruCreate (req, res) {
        // add to database
        const item = {
            'Title': req.body.judul,
            'Artikel': req.body.artikel,
            'Status': (req.body.status === 'on'? true : false),
            'CreatedDate': new Date(Date.now()).toISOString(),
            'CreatedBy': 'Lina',
            'UpdatedDate': '',
            'UpdatedBy': ''
        };
        await guruRepo.create(item);
        // return res.send(item); //debug
        res.redirect('/kntrblkg/guru');
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
