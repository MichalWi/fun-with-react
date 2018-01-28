import React, { Component } from "react"; 
import "./App.css";

class Task extends Component {
	constructor(props){
		super(props);
		this.state = { Text: props.task.Text };
		this.handleChange = this.handleChange.bind(this); 
		this.handleKeyDown = this.handleKeyDown.bind(this); 
	}
	handleChange(event) {  
		this.setState({ Text: event.target.value});
	} 
	
	handleKeyDown(e) {  
		if (e.key === 'Enter') { 
			this.props.handleEnterKey(this); 
		} 
		
		if(e.key ==="Backspace" && this.state.Text === ""){
			this.props.deleteTask(this);
		}
	} 

	render() {
		return (
			<div className="task"> 
				<input value={this.state.Text} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
			</div>
		);
	}
}
export default Task;