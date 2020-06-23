// 'Database'
// const guru = require('./models/guru.js');


module.exports = {
    index: (req, res) => {
        res.render('fe/index.ejs');
    },
    guruSection: (req, res) => {
        res.render('section.ejs',
            {
                sectionName: 'Guru'
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
