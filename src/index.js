// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Custom modules
import App from 'App';

// styles
require('style!css!sass!stylesheet');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			
		</Route>
	</Router>,
	document.getElementById('root')
);