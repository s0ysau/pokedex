const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
	render(){
		return (
			<Default title="Enter a new Pokemon">
				<form method="POST" action="/pokedex">
					Name: <input type="text" name="Name" placeholder="Pokemon Name"></input><br/>
					Type: <input type="text" name="Type" placeholder="What is it's type"></input><br/>
					Weakness: <input type="text" name="Weakness" placeholder="What is it's weakness"></input><br/>
					<input type="submit" value="Submit Pokemon"></input> 
				</form>
			</Default>
		)
	}
}

module.exports = New