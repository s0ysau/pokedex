require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models/db')

// == Configure the app == //

app.use(express.urlencoded({ extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

// == Configure the app == //

// == Start Middleware == //

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/pokedex', require('./controllers/routeController'))

// == Start Middleware == //

app.listen(3004, function(){
    console.log('Listening on port 3004')
})