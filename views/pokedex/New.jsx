const React = require('react')
const Default = require('../layouts/Default.jsx')

const pokemonTypes = {
	types: ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"]
}


class New extends React.Component {
	render(){
		return (
			<Default title="Enter a new Pokemon">
				<form method="POST" action="/pokedex">
					Name: <input type="text" name="Name" placeholder="Pokemon Name"></input><br/>
					Type: <input type="text" name="Type" placeholder="What is it's type"></input><br/>
					{/* Type: <select name="type" id="typesOf"><option value="" selected="selected">Select Type</option></select><br/> */}
					Image: <input type="string" name="Image" placeholder="Upload a image"></input><br/>
					Weakness: <input type="text" name="Weakness" placeholder="What is it's weakness"></input><br/>
					Ready to Fight <input type="checkbox" name="readyToFight"></input><br/>
					<input type="submit" value="Submit Pokemon"></input> 
				</form>
			</Default>
		)
	}
}

// function selecting () {
// 	const selectType = New.getElementById("typesOf")
// 	for (let x in pokemonTypes){
// 		selectType.options[selectType.options.length] = new Option(x,x);
// 	}
// }

// selecting(pokemonTypes);

module.exports = New