import React, { Component } from "react"; 
import debounce from 'lodash.debounce'; 
import PomodoroGroup from "./PomodoroGroup"
import "./Task.css";

class Task extends Component {
	constructor(props){
		super(props);
		this.state = { Text: props.task.Text, Pomodoros: props.task.Pomodoros };
		this.handleChange = this.handleChange.bind(this); 
		this.handleKeyDown = this.handleKeyDown.bind(this);  
		this.emitChangeDebounced = debounce(this.emitChange, 250);
	}
 
	handleChange(e) {
		this.setState({ Text: e.target.value, key: this.props.task.key});
		
		// React pools events, so we read the value before debounce.
		// Alternately we could call `event.persist()` and pass the entire event.
		// For more info see reactjs.org/docs/events.html#event-pooling
		this.emitChangeDebounced();
	}		
	
	emitChange() {
		this.props.updateTask(this); 
	}
	
	handleKeyDown(e) {  
		if (e.key === 'Enter' && this.state.Text) { 
			this.props.addEmptyTask(this);  
			this.props.handleFocus(this.props.id+1);
		} 
		else if(e.key ==="Backspace" && this.state.Text === ""){
			this.props.handleFocus(this.props.id-1); 
			this.props.deleteTask(this);  
			e.preventDefault();
			return false;
		}  
		else if(e.key === "ArrowDown"){
			this.props.handleFocus(this.props.id+1);
			e.preventDefault();
			return false;
		}
		else if(e.key === "ArrowUp")
		{
			this.props.handleFocus(this.props.id-1);      
			e.preventDefault();
			return false; 
		}  
	} 
 
	render() {
		return (
			<div className="task"> 
				<input autoFocus  ref="input"   value={this.state.Text} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
				{this.state.Text &&	<PomodoroGroup />}
			
			</div>
		);
	}
}
export default Task;