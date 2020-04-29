const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://db_user:O5LEiWHVbspbVJpN@cluster0-bqwcb.mongodb.net/?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use('/app', express.static('public'));
app.listen(8000);
console.log('La aplicación esta escuchando en http://localhost:3000');