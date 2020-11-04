//import lib
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//init express
const server = express()
server

    //using the archives
    .use(express.static('public'))

    //configure tamplate engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //create a rotes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//turn on server
server.listen(5500);