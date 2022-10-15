const { update } = require('../models/pokemon')
const pokemon = require('../models/pokemon')

const dataController = {
    // INDEX 
    index (req, res, next) {
        pokemon.find({}, (err, foundPokemon) => {
            //code block
        })
    },
    // DELETE
    destroy (req, res, next) {
        pokemon.findByIdAndDelete ((req.params.id), (err, deletePokemon) => {
            // Code Block 
        })
    },
    // UPDATE 
    update(req, res, next) {
        pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatePokemon) => {
            // Code Block 
        })
    },
    // CREATE 
    create (req, res, next) {
        pokemon.create(req.body, (err, createPokemon) => {
            // Code Block 
        })
    }, 
    // EDIT 
    edit(req, res, next) {
        pokemon.findById(req.params.id, (err, foundPokemon) => {
            // Code Block
        })
    },
    // SHOW 
    show (req, res, next) {
        pokemon.findById(req.params.id, (err, foundPokemon) => {
            // Code Block
        })
    }
}

module.exports = dataController