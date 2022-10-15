const RESOURCE_PATH = '/pokedex'
const viewController = {
    index(req, res, next){
        res.render('/pokedex/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('/pokedex/New')
    },
    edit(req, res, next) {
        res.render('/pokedex/Edit', res.locals.data)
    }, 
    show (req, res, next) {
        res.render('/pokedex/Show', res.locals.data)
    },
    redirectHome(req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.pokedex.id}`)
    }
}

module.exports = viewController