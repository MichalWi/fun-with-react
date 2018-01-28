import React, { Component } from "react"; 
import Task from "./Task";

import "./App.css";

const TaskHistoryKey = "QuiteUniqueKeyForChachingThoseTasksSir";

class TaskList extends Component {
	
	constructor(props){
		super(props);

		this.state = {taskList : [], lastId : 0};

		this.addEmptyTask = this.addEmptyTask.bind(this); 
		this.deleteTask = this.deleteTask.bind(this); 
		this.updateTask = this.updateTask.bind(this); 
		this.handleFocus = this.handleFocus.bind(this); 

	}
	componentDidMount() { 
 
		//todo: load from memory/API
		if(window.localStorage){
			var cache = JSON.parse(localStorage.getItem(TaskHistoryKey));
		 
			if(cache){ 
				this.setState(cache);
			}
		}  
	} 

	addEmptyTask() {  
 
		this.setState(prevState => ({
			taskList:  [...prevState.taskList, { key: prevState.lastId + 1, Text: ""}],
			lastId : prevState.lastId + 1
		}));
	}

	updateTask(taskToUpdate){

		let taskToUpdateIndex = this.state.taskList.findIndex(x => x.key === taskToUpdate.state.key);

		let newTaskList = this.state.taskList.slice();
		newTaskList[taskToUpdateIndex] = taskToUpdate.state; 

		this.setState(prevState => ({
			taskList:  newTaskList,
			lastId : prevState.lastId
		}));

		this.saveState();
	}

	saveState(){
  
		if(window.localStorage){
			localStorage.setItem(TaskHistoryKey, JSON.stringify(this.state));
		}
	}

	deleteTask(taskToDelete) { 

		this.setState(prevState => ({
			taskList:  prevState.taskList.filter(function(task) {
				return task.key !== taskToDelete.props.task.key;
			})
		}));  
 

		if(window.localStorage){
			localStorage.setItem(TaskHistoryKey, JSON.stringify(this.state));
		}
	}

	handleFocus(id) {
		var child = this.refs['task' + id];
		if (!child) return;
		var input = child.refs.input;
		input.focus();
	}
	
	render() {
		return (
			<div className="tasks"> 
				{
					this.state.taskList.map((task, i) => {
						return	<Task 
							id={i}
							key={task.key} 
							task={task} 
							addEmptyTask={this.addEmptyTask} 
							updateTask={this.updateTask} 
							deleteTask={this.deleteTask}
							handleFocus={this.handleFocus}
							ref={'task' + i}
						/>; 
					})
				}
				<input type="button" className="button" value="Add new task" onClick={this.addEmptyTask}/>
			
			</div>
			
		);
	}
}
export default TaskList;