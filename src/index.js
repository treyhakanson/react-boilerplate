// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

// Custom modules
import routes from 'routes';

// styles
require('style!css!sass!stylesheet');

ReactDOM.render(
	<Router history={hashHistory} routes={routes} />,
	document.getElementById('root')
);