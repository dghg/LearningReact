import React, {Component} from 'react';

class HiddenMessage extends Component {
	constructor(props){
		super(props)
		this.state = {
			hidden : (props.hide) ? props.hide : true
		}
	}
	
	componentWillReceiveProps(nextProps) { // 계속 props가 변함 >> setState로 리렌더링 필요 !
		this.setState({hidden : nextProps.hide})
	}
	render() {
		const { children } = this.props
		const { hidden } = this.state
		return (
			<p>
			{
				(hidden) ? children.replace(/[a-zA-z0-9]/g, "x")
					     : children
			}
			
			</p>
		)
		
	}
	
}

export default HiddenMessage;