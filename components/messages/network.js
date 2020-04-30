const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const config = require('../../config');
const upload = multer({
    dest: `public/${config.filesRoute}/`,
})

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, "Error al crear desde el server", 500, 'Error en el controlador');
        })
})
router.post('/', upload.single('file'), (req, res) => {
    console.log(req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, "Error al crear desde el server", 500, 'Error en el controlador');
        });
})
router.patch('/:id', (req, res) => {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        })
})

module.exports = router;