import React, { Component } from "react"; 
import Task from "./Task";

import "./App.css";

class TaskList extends Component {

	constructor(props){
		super(props);

		this.state = {taskList : []};

		this.handleEnterKey = this.handleEnterKey.bind(this); 
		this.handleDeleteTask = this.handleDeleteTask.bind(this); 

	}
	componentDidMount() { 
		//todo: load from memory 
		let tasks = [{key:0, "Text":"Make an app"}];


		this.setState({ taskList: tasks }) ;
	} 

	handleEnterKey() { 
		let idToAdd = this.state.taskList[this.state.taskList.length -1].key + 1;
		this.setState({
			taskList: [...this.state.taskList, {key:idToAdd, Text: ""}]
		}); 
	}

	handleDeleteTask(taskToDelete) { 
		
		let newArray  = this.state.taskList.filter(function(task) {
			return task.key !== taskToDelete.props.task.key;
		});

		this.setState({
			taskList:  newArray
		});  
	}

	render() {
		return (
			<div className="tasks"> 
				{
					this.state.taskList.map(task => {
						return  	<Task key={task.key} task={task} handleEnterKey={this.handleEnterKey} deleteTask={this.handleDeleteTask}/>; 
					})
				}
			
			</div>
		);
	}
}
export default TaskList;