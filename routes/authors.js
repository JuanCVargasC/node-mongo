const route = require('express').Router()

const {
    index
}=require('../controllers/controll-authors')
route.get('/',index)
module.exports = route