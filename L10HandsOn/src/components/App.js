import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, switchNumbers, countClicksReset } from '../actions/index';

class App extends React.Component {
	render() {
		return (
			<div>
				<h3>Counter</h3>
				<Counter
					count={this.props.count}
					countClicks={this.props.countClicks}
					onIncrement={this.props.onIncrement}
					onDecrement={this.props.onDecrement}
					onCountClicksReset={this.props.onCountClicksReset}
					onSwitchNumbers={this.props.onSwitchNumbers}
					searchNumber={this.props.searchNumber}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => dispatch(increment()),
		onDecrement: () => dispatch(decrement()),
		onSwitchNumbers: (number) => dispatch(switchNumbers(number)),
		onCountClicksReset: () => dispatch(countClicksReset())
	};
}
function mapStateToProps(state) {
	return {
		count: state.count,
		countClicks: state.countClicks,
		searchNumber: state.searchInput
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
