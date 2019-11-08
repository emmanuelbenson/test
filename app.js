const express = require('express');
const app = express();

app.get('/api/v1', (req,res) => {
	res.json({
		message: 'Welcome to express js API project v1 0.1.0'
	});
});

app.get('/api/v1/documentation', (req,res) => {
	res.json({
		doc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
	});
});

module.exports = app;
