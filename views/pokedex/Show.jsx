const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
	render(){
		const {Name, Type, Image, Weakness, readyToFight, _id} = this.props.pokemon
		return (
			<Default title={`${Name}'s Pokedex`} pokemon={this.props.pokemon}>
				<a href={Image}>Image</a>
				<p>{Name} is an {Type} Pokemon, it's weak against {Weakness} type opponents and {readyToFight? 'it\'s ready to fight' : 'it\'s not ready to fight yet'}</p>
			</Default>
		)
	}
}

module.exports = Show