const { update } = require('../models/pokemon')
const Pokemon = require('../models/pokemon')

const dataController = {
    // INDEX 
    index (req, res, next) {
        Pokemon.find({}, (err, foundPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                }) 
            } else {
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    },
    // DELETE
    destroy(req, res, next) {
        Pokemon.findByIdAndDelete(req.params.id, (err, deletePokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = deletePokemon
                next()
            }
        })
    },
    // UPDATE 
    update(req, res, next) {
        Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = updatedPokemon
                next()
            }
        })
    },
    // CREATE 
    create (req, res, next) {
        Pokemon.create(req.body, (err, createdPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = createdPokemon
                next()
            }
        })
    }, 
    // EDIT 
    // SHOW 
    show (req, res, next) {
        Pokemon.findById(req.params.id, (err, foundPokemon) => {
            if(err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a Pokemon with that ID'
                })
            } else {
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    }
}

module.exports = dataController