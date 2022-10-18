const React = require('react')
const Default = require('../layouts/Default.jsx')




class Edit extends React.Component {
	render(){
        const {Name, Type, Weakness, _id} = this.props.pokemon
		return (
			<Default title={`${Name} Edit Page`} pokemon={this.props.pokemon}>
				<form method="POST" action={`/pokedex/${_id}?_method=PUT`}>
					Name: <input type="text" name="Name" defaultValue={Name}></input><br/>
					Type: <input type="text" name="Type" defaultValue={Type}></input><br/>
					Weakness: <input type="text" name="Weakness" defaultValue={Weakness}></input><br/>
					<input type="submit" value="Edit Pokemon"/>
				</form>
			</Default>
		)
	}
}

module.exports = Edit