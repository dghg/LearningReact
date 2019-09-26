import React from 'react';

const PeopleList = ({data}) => 
	<ol classname="people-list">
		{data.results.map((person,i)=>{
			const {first, last} = person.name
			return <li key={i}>{first} {last}</li>
		
	})}
	</ol>

export default PeopleList;