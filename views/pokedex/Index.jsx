const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
	render(){
		const {pokemon} = this.props
		return (
			<Default title="The Pokedex">
				<ul>
					{
						pokemon.map((poke) => {
							const {Name, Type, Weakness, readyToFight, _id} = poke
							return(
								<li key={_id}>
									<a href={`/pokedex/${_id}`}>{Name}</a> is a {Type} type and {readyToFight? 'it\'s ready to fight' : 'it\'s not ready to fight'}. <br/>
									<form method="POST" action={`/pokedex/${_id}?_method=DELETE`}>
										<input type="submit" value={`Delete ${Name}`} />
									</form>
								</li>
							)
						})
					}
				</ul>
			</Default>
		)
	}
}

module.exports = Index