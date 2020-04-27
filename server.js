const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const response = require('./network/response');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor por defecto"
    })
    response.success(req, res, "lista de mensajes");
})
router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if (req.query.error == 'ok') {
        response.error(req, res, "Error al crear desde el server");
    }
    response.success(req, res, "creado correctamente");

})
app.listen(3000);