const path = require('path')
const fs = require('fs')
const products = []

module.exports = class Products{
    constructor(title){
        this.title = title
    }
    save(){
        const filePath = path.join(__dirname, '..', '/data', 'products.json')
        fs.readFile(filePath, (err, fileData) => {
            let products = []
            if(!err){
                products = JSON.parse(fileData)
            }
            products.push(this)
            fs.writeFile(filePath , JSON.stringify(products), err => console.error(err))
        })

        
    }
    static fetchAll(cb){
        const filePath = path.join(__dirname, '..', '/data', 'products.json')
       fs.readFile(filePath, (err, data) => {
        if(err){
            cb([])
        }
           cb(JSON.parse(data))
       })
    }
}