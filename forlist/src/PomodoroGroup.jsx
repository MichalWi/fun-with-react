import React, { Component } from "react";
import "./PomodoroGroup.css";

class PomodoroGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pomodoros: [],
			lastId: 0
		};
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
	}


	handlePlus() {
		this.setState(prevState => ({
			pomodoros: [...prevState.pomodoros, { id: prevState.lastId + 1, Text: "" }],
			lastId: prevState.lastId + 1
		}));
	}
	handleMinus() {
		if (this.state.pomodoros.length) {
			this.setState(prevState => ({
				pomodoros: prevState.pomodoros.slice(0, -1)
			}));
		}
	}

	render() {
		let items = this.state.pomodoros.map((item) => { 
			return <span key={item.id} role="img" aria-label="pomodoro" className="completed tomato">🍅</span>;
		});

		return (
			<div className="pomodoro-group">
				<div>
					<button onClick={this.handlePlus}><span role="img" aria-label="plus" >➕</span></button>
					<button onClick={this.handleMinus}><span role="img" aria-label="minus" >➖</span></button>
					
					{items}  
				
				</div>
			</div>
		);
	}
}
export default PomodoroGroup;
