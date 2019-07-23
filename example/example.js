var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

var styles = {
	picker: {
		background: '#000',
		color: '#fff'
	},
	portal: {
		border: '2px solid #555',
		marginTop: '-400px'
	}
}

ReactDOM.render(
  React.createElement(DateTime, {
	viewMode: 'months',
	dateFormat: 'MMMM',
	isValidDate: function(current) {
		return current.isBefore(DateTime.moment().startOf('month'));
	}
}),
  document.getElementById('datetime')
);
ReactDOM.render(
  React.createElement(DateTime, { timeFormat: true, direction: 'up' }),
  document.getElementById('datetime--footer')
);
ReactDOM.render(
	React.createElement(DateTime, { timeFormat: true, direction: 'up', portalTarget: 'datetime--portal', styles: styles }),
	document.getElementById('datetime--portal')
);
