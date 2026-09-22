const express = require('express');
const router = express.Router();
const recepcionController = require('../controllers/recepcion.controller');

router.get('/fq', recepcionController.getRecepcionFQ);
router.get('/mb', recepcionController.getRecepcionMB);

module.exports = router;