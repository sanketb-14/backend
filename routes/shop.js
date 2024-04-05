const express = require('express')
const router = express.Router()
const path = require('path')

const filePath = path.join(__dirname, '..','views','shop.html')
router.get('/', (req, res) => {
    res.sendFile(filePath)

})

module.exports = router