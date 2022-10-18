const React = require('react')
const Default = require('../layouts/Default.jsx')




class Edit extends React.Component {
	render(){
        const {Name, Type, Image, Weakness, readyToFight, _id} = this.props.pokemon
		return (
			<Default title={`${Name} Edit Page`} pokemon={this.props.pokemon}>
				<form method="POST" action={`/pokedex/${_id}?_method=PUT`}>
					Name: <input type="text" name="Name" defaultValue={Name}></input><br/>
					Type: <input type="text" name="Type" defaultValue={Type}></input><br/>
					Type: <select name="type" id="typesOf"><option value="" selected="selected">Select Type</option></select><br/>
					Image: <input type="string" name="Image" defaultValue={Image}></input><br/>
					Weakness: <input type="text" name="Weakness" defaultValue={Weakness}></input><br/>
					Ready to Fight <input type="checkbox" name="readyToFight" defaultValue={readyToFight}></input><br/>
					<input type="submit" value="Edit Pokemon"/>
				</form>
			</Default>
		)
	}
}

module.exports = Edit