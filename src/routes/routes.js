const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
router.get('/index.html', indexController.list);
router.get('/', indexController.list);

const faqController = require('../controllers/faqController');
router.get('/FAQ.html', faqController.list);

const galeriaController = require('../controllers/galeriaController');
router.get('/galeria.html', galeriaController.list);

const nosotrosController = require('../controllers/nosotrosController');
router.get('/nosotros.html', nosotrosController.list);

const loginController = require('../controllers/loginController');
router.get('/login.html', loginController.list);

const seleccionController = require('../controllers/seleccionController');
router.get('/seleccion.html', seleccionController.list);

const registerController = require('../controllers/registerController');
router.get('/register.html', registerController.list);
router.post('/add', registerController.save);

const checkoutController = require('../controllers/checkoutController');
router.get('/checkout.html', checkoutController.list);

module.exports = router;