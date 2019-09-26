import React from 'react'

// Stateless component
// 구성 : form 랜딩, props로부터 addColor 받아 form에 있는 data 넘겨줌


const AddColorForm = ({onNewColor=f=>f}) => { // stateless component. default로 props 안줬을 때 placeholder function 설정
	let _title, _color
	const submit = e => {
		e.preventDefault()
		onNewColor(_title.value, _color.value)
		_title.value=''
		_color.value='#000000'
		_title.focus()
	}
	return(
		<form onSubmit={submit}>
			<input type="text" ref={input=> _title = input} placeholder="color title..." required/>
			<input type="color" ref={input=> _color = input} placeholder="color title..." required/>
			<button>ADD</button>
		</form>
	
	
	
	)
}

export default AddColorForm;