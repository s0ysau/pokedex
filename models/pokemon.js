const mongoose = require ('mongoose')

// Make a Schema 

const pokemonData = new mongoose.Schema ({
    Name: { type: String, required: true},
    Type: { type: String, required: true},
})

const pokemon = mongoose.model('pokemon', pokemonData)

module.exports = pokemon