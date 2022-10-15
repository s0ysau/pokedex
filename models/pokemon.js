const mongoose = require ('mongoose')

// Make a Schema 

const pokemonSchema = new mongoose.Schema ({
    Name: { type: String, required: true},
    Type: { type: String, required: true},
    Weakness: { type: String, required: true}
})

const Pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = Pokemon