import React from 'react';
import Child from './Child';

var App = React.createClass({
	getInitialState() {
		return {
			name: 'Steven'
		}
	},
	render() {
		return (
			<div>
				<input onKeyDown={this.handleKeyDown}/>
				<Child name={this.state.name} setChip={this.setToChip.bind(this)} />
			</div>
		)
	},
	handleKeyDown(e) {
		if (e.keyCode === 13) {
			this.setState({
				name: e.target.value
			})
		}
	},
	setToChip() {
		this.setState({
			name: 'Chip'
		})
	}
});

export default App;