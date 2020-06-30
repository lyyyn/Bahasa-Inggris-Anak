if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

// Dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./db');
db.connect();

//Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));





require('./routes')(app);

app.listen(port, () => {
	console.log(`BIA : I am listening on port: ${port}`);
});