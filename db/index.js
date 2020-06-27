// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://dbLina:jBdf48k6DlIEp3ZK@clstrlin001-ldhm1.mongodb.net/bia?retryWrites=true&w=majority', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', error =>  console.error(error));
// db.once('open', () =>  console.log('Connected to Mongoose'));

const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = process.env.MONGODB_URI || 'mongodb+srv://dbLina:jBdf48k6DlIEp3ZK@clstrlin001-ldhm1.mongodb.net/bia?retryWrites=true&w=majority';
const DB_NAME = 'bia';
const COLLECTIONS = {
    ARTIKEL: 'secGuru',
    MATERI: 'secMateri',
    ORTU: 'secOrtu'
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB - BIA');
        const db = connection.db(DB_NAME);
        this.artikel = db.collection(COLLECTIONS.ARTIKEL);
        this.ortu = db.collection(COLLECTIONS.ORTU);
        this.materi = db.collection(COLLECTIONS.MATERI);
    },
    disconnect () {
        return client.close();
    },
};
