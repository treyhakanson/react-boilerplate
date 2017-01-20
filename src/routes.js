import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App';

export default (
	<Route path="/" component={App}>
		<Route path="*" component={() => <h1>404 Not Found</h1>}/>
	</Route>
);