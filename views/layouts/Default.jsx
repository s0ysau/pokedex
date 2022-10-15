const React = require('react')

class Default extends React.Component {
    render(){
    const {pokemon, title} = this.props
    return (
        <html>
            <head>
                //css 
                <title>POKEDEX</title>
            </head>
            <nav>
                <a href='/pokedex'>Go to the Pokedex Main Page</a><br/>
                <a href='/pokedex/new'>Add a new Pokemon to the Dex</a><br/>
                {pokemon? <a href={`/pokedex/${pokemon._id}/edit`}>{pokemon.Name} Edit Page</a> : ''}<br/>
                {pokemon? <a href={`/pokedex/${pokemon._id}`}>{pokemon.Name} Info</a> : ''}
            </nav>
            <body>
                <h1>
                    {title}
                </h1>
                {this.props.children}
            </body>
        </html>
    )
    }
}

module.exports = Default