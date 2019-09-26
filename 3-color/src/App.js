import React, { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './Components/AddColorForm'
import ColorList from './Components/ColorList'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colors : [
				{
					"id" : "wr0wr0",
					"title" : "black",
					"color" : "#000000",
					"rating" : 3
				},
				{
					"id" : "wr0asdwr0",
					"title" : "bl22",
					"color" : "#26ac56",
					"rating" : 4			
				}
				
			] // 각 element가 color정보인 array
		}
		
		this.addColor = this.addColor.bind(this)
		this.rateColor = this.rateColor.bind(this)
		this.removeColor = this.removeColor.bind(this)
	
	}
	
	addColor(title, color) { // setstate 
		const colors = [
			...this.state.colors,
			{
				id : v4(),
				title,
				color,
				rating : 0
			}
		]
		
		this.setState({colors})
	}
	
	rateColor(id, rating) {
		const colors = this.state.colors.map(color => ((color.id)===id) ? {...color, rating} : color)
		
		this.setState({colors})
		
	}
	
	removeColor(id) {
		const colors = this.state.colors.filter(color=>color.id!==id)
		
		this.setState({colors})
	}
	
	
	render() {
		const { addColor, rateColor, removeColor } = this
		const { colors } = this.state
		return (
			<div className="app">
				<AddColorForm onNewColor={addColor} />
				<ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
			</div>	
	
		)
		
	}
}

export default App;
