import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useState, useEffect } from 'react'

const App = () => {
	const [searchField, setSearchField] = useState('')
	const [monsters, setMonsters] = useState([])
	const [filteredMonsters, setFilteredMonsters] = useState(monsters)
	const [stringField, setStringField] = useState('')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setMonsters(users))
	}, [])

	useEffect(() => {
		const newFilteredMonsters =  monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField)
		})

		setFilteredMonsters(newFilteredMonsters)
	},[monsters, searchField])

	const onSearchChange = event => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchField(searchFieldString)
	}

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters</h1>

			<SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
			<CardList monsters={filteredMonsters} />
		</div>
	)
}

// class App extends Component {
// 	constructor() {
// 		super()

// 		this.state = {
// 			monsters: [],
// 			searchField: ''
// 		}
// 		console.log('constructor');
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 		.then((users) => this.setState(() => {
// 			return {monsters: users}
// 		},
// 		() => {
// 			console.log(this.setState)
// 		}
// 		))
// 		console.log('Component did mount');
// 	}

// 	render() {
// 		console.log('render')

// 		const {monsters, searchField,} = this.state
// 		const {onSearchChange} = this

//

// 	}
// }

export default App
