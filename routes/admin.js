const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

router.get('/add-product', (req, res, next) => {
    const filePath = path.join(rootDir,'server','views', 'add-product.html')
    res.sendFile(filePath)
    

})

router.use('/add-product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router