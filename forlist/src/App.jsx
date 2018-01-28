import React, { Component } from "react";
import logo from "./logo.svg";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
 

	render() {	
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Advanced lel system</h2>
				</div>
				<div className="tasks">
					<h1>Task List</h1>
					<TaskList/>
				</div>
			</div>
		);
	}
}
export default App;