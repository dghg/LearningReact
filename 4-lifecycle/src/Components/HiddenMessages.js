import React, {Component} from 'react';
import HiddenMessage from './HiddenMessage';

class HiddenMessages extends Component {
	constructor(props){
		super(props)
		this.state = {
			messages : [
				"This is message 1",
				"This is message 22",
				"This is message 33"
			],
			
			showing : -1
			
		}
		
	}
	
	componentWillMount() {
		this.interval = setInterval(() => {
			let {showing, messages} = this.state
			showing = (++showing >= messages.length) ? -1 : showing
			this.setState({showing})
		}, 1000)
	}
	
	componentWillUnmount(){
		
	}
	render(){
		const { messages, showing } = this.state
		return (
			<div className="hidden-messages">
			{messages.map((message, i) => <HiddenMessage key={i} hide={(i!==showing)}>{message}</HiddenMessage>)}
			</div>
		
		)
		
	}
	
}

export default HiddenMessages;