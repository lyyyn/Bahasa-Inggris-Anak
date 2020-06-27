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
    async artikelSection(req, res) {
        const items = await artikelRepo.getAll();
        return res.render('fe/index.ejs', {
            page: 'fe-section-content',
            items,
            sectionName: ' - ' + ARTIKEL_SECTION_NAME
        });
    },
    artikelSectionDetail: (req, res) => {
        res.render('sectionDetail.ejs',
            {
                sectionName: 'Artikel',
                urlTitle: req.params.urlTitle
            });
    }
};
