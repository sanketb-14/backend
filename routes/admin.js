

const express = require('express');
const router = express.Router();

const controllerProducts = require('../controllers/products')



;

// /admin/add-product => GET
router.get('/add-product', controllerProducts.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', controllerProducts.postAddProduct );
module.exports = router;