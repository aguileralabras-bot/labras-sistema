const { Router } = require('express');
const { obtenerDatosDashboard } = require('../controllers/dashboard.controller');

const router = Router();

router.get('/', obtenerDatosDashboard);

module.exports = router;