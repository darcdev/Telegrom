const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
})

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
        .then(user => {
            response.success(req, res, user, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        })
})

module.exports = router;