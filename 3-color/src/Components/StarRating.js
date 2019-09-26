import React from 'react'
import Star from './Star'

const StarRating = ({starSelected=0, totalStars=5, onRate=f=>f }) =>
	<div className="star-rating">
		{[...Array(totalStars)].map((n, i) => <Star key={i} selected={i<starSelected} onClick={()=>onRate(i+1)} />)}
	
	<p>{starSelected} of {totalStars} stars</p>
	</div>

export default StarRating;