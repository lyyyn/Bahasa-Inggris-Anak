const guruRepo = require('../repositories/guruRepo');
const GURU_SECTION_NAME = 'Guru';

module.exports = {
    index: (req, res) => {
        res.render('fe/index.ejs',{
            page: 'fe-homepage-content',
            items: {},
            sectionName: ''
        });
    },
    async guruSection(req, res) {
        const items = await guruRepo.getAll();
        return res.render('fe/section.ejs', {
            page: 'fe-guru-listing',
            items,
            sectionName: ' - ' + GURU_SECTION_NAME
        });
    },
    guruSectionDetail: (req, res) => {
        res.render('sectionDetail.ejs',
            {
                sectionName: 'Guru',
                urlTitle: req.params.urlTitle
            });
    }
};
