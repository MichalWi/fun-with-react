import React, { Component } from "react"; 
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
 

	render() {	
		return (
			<div className="App">
				<div className="App-header">
					<div className="App-logo"><span  role="img"  aria-label="tomato" >🍅</span></div>
				</div>
				<div className="tasks"> 
					<TaskList/>
				</div>
			</div>
		);
	}
}
export default App;