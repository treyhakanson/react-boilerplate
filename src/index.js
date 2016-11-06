// third-party modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

// custom modules
import routes from 'routes';
import { configureStore } from 'configureStore';

// styles
require('style!css!sass!stylesheet');


ReactDOM.render(
	<Provider store={configureStore()}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);