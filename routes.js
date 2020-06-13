const fe = require('./feController');
const be = require('./beController');
		
module.exports = (app) => {
    // BE - Add Page in Teacher Section
    app.get('/kntrblkg/guru/add', be.guruAdd);

    // BE - Edit Page in Teacher Section
    app.get('/kntrblkg/guru/edit/:idx', be.guruEdit);

    // BE - Listing All Pages under Teacher Section
    app.get('/kntrblkg/guru', be.guruList);

    // BE - Teacher - CREATE
    app.post('/kntrblkg/guru', be.guruCreate);

    // BE - Teacher - UPDATE
    app.put('/kntrblkg/guru/:idx', be.guruUpdate);

    // BE - Teacher - DELETE
    app.delete('/kntrblkg/guru/:idx', be.guruDelete);

    // FE - Homepage
    app.get('/', fe.index);

    // FE - Display Teacher Section
    app.get('/guru', fe.guruSection);

    // FE - Display Teacher Section Detail
    app.get('/guru/:urlTitle', fe.guruSectionDetail);
};
