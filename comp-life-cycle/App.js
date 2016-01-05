import React from "react";
import Child from "./Child";

var App = React.createClass({
	getInitialState() {
		return {
			visible: false,
			name: 'Steven'
		}	
	},
	componentWillMount() {
		console.log("I'm gonna do it!")
	},
	componentDidMount() {
		console.log("I did it!");
	},
	render() {
		return (
			<div>
				<button onClick={this.updateName}>Update Name</button>
				<button onClick={this.onOff}>Show/Hide Child</button>
				{this.state.visible ? <Child name={this.state.name} /> : null}
			</div>
		)
	},
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	},
	updateName() {
		this.setState({
			name: this.state.name
		});
	}
});

export default App;
