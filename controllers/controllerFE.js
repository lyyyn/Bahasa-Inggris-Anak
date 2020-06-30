const artikelRepo = require('../repositories/artikelRepo');
const ARTIKEL_SECTION_NAME = 'Artikel';

module.exports = {
    index: (req, res) => {
        res.render('fe/index.ejs',{
            page: 'fe-homepage-content',
            items: {},
            sectionName: ''
        });
    },
    contact: (req, res) => {
        res.render('fe/contact.ejs');
    },
    async artikelSection(req, res) {
        const items = await artikelRepo.getAll();
        return res.render('fe/index.ejs', {
            page: 'fe-section-content',
            items,
            sectionName: ' - ' + ARTIKEL_SECTION_NAME
        });
    },
    async artikelSectionDetail (req, res) {
        const items = await artikelRepo.getOneByID(req.params.idx);
        return res.render('fe/index.ejs', {
            page: 'fe-section-detail',
            items,
            sectionName: ' - ' + ARTIKEL_SECTION_NAME
        });
    }
};
