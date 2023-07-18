const route = require('express').Router()

const {
    index,
    save,
    findByID,
    update,
    erase
}=require('../controllers/controll-authors')
route.get('/',index)
route.post('/',save)
route.get('/:id',findById)
route.put('/:id',update)
route.delete('/:id',erase)

module.exports = route;


