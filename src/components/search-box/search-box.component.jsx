import { Component } from 'react'

class SearchBox extends Component {
	render(){

        const {onChangeHandler} = this.props
        const {placeholder} = this.props
        const {className} = this.props
        
    return( 
		<input 
        type='search' 
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler} />
        )
	}
}

export default SearchBox
