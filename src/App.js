import { Component } from 'react'
import './App.css'

class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
			searchField: ''
		}
		console.log('constructor');
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((users) => this.setState(() => {
			return {monsters: users}
		},
		() => {
			console.log(this.setState)
		}
		))
		console.log('Component did mount');
	}

onSearchChange = (event) => {
	console.log(event.target.value)
	const searchField = event.target.value.toLocaleLowerCase()
	this.setState(() => {
		return {searchField}

	})
	}


	render() {
		console.log('render')

		const filteredMonsters = this.state.monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(this.state.searchField);
		})



		return (
			<div className='App'>
			<input onChange={this.onSearchChange}
			 className='search-box' type="search" placeholder='search monsters' />
				{filteredMonsters.map(monster => {
					return <div key={monster.id}>
					<h1>{monster.name}</h1>
					</div>
				})}
				
			</div>
		)
	}
}

export default App
