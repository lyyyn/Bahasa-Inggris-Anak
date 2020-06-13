const fe = require('./feController');
		
module.exports = (app) => {
    // FE - Homepage
    app.get('/', fe.index);

    // FE - Display Teacher Section
    app.get('/guru', fe.guruSection);

    // FE - Display Teacher Section Detail
    app.get('/guru/:urlTitle', fe.guruSectionDetail);
};
