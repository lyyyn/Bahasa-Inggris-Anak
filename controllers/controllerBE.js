const artikelRepo = require('../repositories/artikelRepo');
const DASHBOARD_TEXT_COLOR = 'red-text text-darken-4';
const DASHBOARD_SECTION_COLOR = 'red darken-4';
const ARTIKEL_SECTION_NAME = 'Artikel';
const ARTIKEL_TEXT_COLOR = 'orange-text text-darken-3';
const ARTIKEL_SECTION_COLOR = 'orange darken-3';

module.exports = {
    adminPanel: (req, res) => {
        res.render('be/dashboard.ejs', {
            sectionName: 'Dashboard',
            textColor: DASHBOARD_TEXT_COLOR,
            sectionColor: DASHBOARD_SECTION_COLOR
        });
    },
    async artikelList(req, res) {
        const items = await artikelRepo.getAll();
        return res.render('be/admListing.ejs', {
            items,
            sectionName: ARTIKEL_SECTION_NAME,
            textColor: ARTIKEL_TEXT_COLOR,
            sectionColor: ARTIKEL_SECTION_COLOR
        });
    },
    artikelAdd: (req, res) => {
        res.render('be/edit.ejs',
            {
                item: {Artikel:""},
                checkStatus: "Checked",
                sectionName: ARTIKEL_SECTION_NAME,
                type: 'Add',
                textColor: ARTIKEL_TEXT_COLOR,
                sectionColor: ARTIKEL_SECTION_COLOR
            });
    },
    async artikelEdit (req, res) {
        const item = await artikelRepo.getOneByID(req.params.idx);
        return res.render('be/edit.ejs', {
                item,
                checkStatus: (item.Status) ? "Checked" : "",
                sectionName: ARTIKEL_SECTION_NAME,
                type: 'Edit',
                textColor: ARTIKEL_TEXT_COLOR,
                sectionColor: ARTIKEL_SECTION_COLOR
        });
    },
    async artikelCreate (req, res) {
        // add to database
        const item = {
            'Title': req.body.judul,
            'Image': req.body.image,
            'Artikel': req.body.artikel,
            'Status': (req.body.status === 'on'? true : false),
            'CreatedDate': new Date(Date.now()).toISOString(),
            'CreatedBy': 'Lina',
            'UpdatedDate': new Date(Date.now()).toISOString(),
            'UpdatedBy': 'Lina'
        };
        await artikelRepo.create(item);
        // return res.send(item); //debug
        res.redirect('/kntrblkg/artikel');
    },
    async artikelUpdate (req, res) {
        // add to database
        const item = {
            'Title': req.body.judul,
            'Image': req.body.image,
            'Artikel': req.body.artikel,
            'Status': (req.body.status === 'on'? true : false),
            'CreatedDate': req.body.CreatedDate,
            'CreatedBy': req.body.CreatedBy,
            'UpdatedDate': new Date(Date.now()).toISOString(),
            'UpdatedBy': 'Lina'
        };
        await artikelRepo.updateByID(req.body._id,item);
        res.redirect('/kntrblkg/artikel');
    },
    async artikelDelete (req, res) {
        await artikelRepo.deleteByID(req.params.idx);
        res.redirect('/kntrblkg/artikel');
    },

};
