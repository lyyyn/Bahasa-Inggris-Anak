const be = require('./controllers/controllerBE');
const fe = require('./controllers/controllerFE');
		
module.exports = (app) => {
    // BE - Add Page in Teacher Section
    app.get('/kntrblkg/artikel/add', be.artikelAdd);

    // BE - Edit Page in Teacher Section
    app.get('/kntrblkg/artikel/:idx', be.artikelEdit);

    // BE - Listing All Pages under Teacher Section
    app.get('/kntrblkg/artikel', be.artikelList);

    // BE - Teacher - CREATE
    app.post('/kntrblkg/artikel', be.artikelCreate);

    // BE - Teacher - UPDATE
    app.put('/kntrblkg/artikel/:idx', be.artikelUpdate);

    // BE - Teacher - DELETE
    app.delete('/kntrblkg/artikel/:idx', be.artikelDelete);

    // BE - Admin Panel
    app.get('/kntrblkg', be.adminPanel);

    // FE - Homepage
    app.get('/', fe.index);

    // FE - Display Teacher Section
    app.get('/artikel', fe.artikelSection);

    // FE - Display Teacher Section Detail
    app.get('/artikel/:idx', fe.artikelSectionDetail);
};
