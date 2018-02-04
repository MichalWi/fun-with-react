import React, { Component } from "react";
import "./Timer.css";

class PomodoroGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			running: false,
			time: 0
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.renderTime = this.renderTime.bind(this);
	}


	handleToggle() {
		this.setState(prevState => ({
			running: !prevState.running,
		}));
		clearTimeout(this.timer);
		this.timer = setInterval(() => {
			this.setState(prevState => ({
				time: prevState.running ? prevState.time + 1 : prevState.time,
			}));
		}, 1000); 
	}

	renderTime(){
		var time = this.state.time;
		var minutes =  Math.floor(time / 60);
		var seconds = time - minutes * 60; 

		if(minutes<10){
			minutes = "0" + minutes;
		}
		if(seconds<10){
			seconds = "0" + seconds;
		}

		return (<span>{minutes}:{seconds}</span>);
	}


	componentWillUnmount() {
		clearTimeout(this.timer);
	}


	render() {

		return (
			<div className="timer">
				{this.renderTime()}
				<button className="start" onClick={this.handleToggle}><span role="img" aria-label="start"  >
					{this.state.running ? "🏃‍": "⏱"}
				</span></button>
			</div>
		);
	}
}
export default PomodoroGroup;
