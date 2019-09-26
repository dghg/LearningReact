import React, {Component} from 'react';
import Member from './Member';


const getFakeMembers = count => new Promise((resolves, rejects)=> {
	const api = `https://api.randomuser.me/?nat=KR&results=${count}`
	const request = new XMLHttpRequest()
	
	request.open('GET', api)
	request.onload = () => (request.status==200) ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText))
	
	request.onerror = err=> rejects(err)
	request.send()
})

class MemberList extends Component {
	constructor() {
		super()
		this.state = {
			members : [],
			loading : false,
			error : null
		}
	}
	
	componentWillMount() { // mount 되기 전에 호출
		this.setState({loading:true})
		getFakeMembers(this.props.count).then(
			members => {this.setState({members, loading:false})},
			error => {this.setState({error, loading : false})}
		
		)
	}
	
	componentWillUpdate() {
		console.log("THIS IS UPDATING LIFECYCLE.")
	}
	
	render() {
		const {members, loading, error} = this.state
		return (
			<div className="member-list">
			{
				(loading) ? <span>Loading Members</span> :
					        (members.length) ? members.map((user, i)=> <Member key={i} {...user}/>) : <span>there is no member.</span>
			}
			{ (error) ? <p>error.</p> : ""}
			</div>	
			
		)
	}
	
	
}

export default MemberList;