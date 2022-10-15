const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
	render(){
		const {Name, Type, Weakness, _id} = this.props.pokemon
		return (
			<Default title={`${Name}'s Pokedex`} pokemon={this.props.pokemon}>
				<p>{Name} is an {Type} Pokemon and it's weak against {Weakness} type opponents</p>
			</Default>
		)
	}
}

module.exports = Show