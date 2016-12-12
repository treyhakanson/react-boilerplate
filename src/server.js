const PORT = process.env.PORT || 8080;
const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.get('*', function(_, res) {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// not really sure what this should be doing
// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack');
//   const webpackDevMiddleware = require('webpack-dev-middleware');
//   const webpackHotMiddleware = require('webpack-hot-middleware');
//   const config = require('../webpack.dev.config.js');

//   const compiler = webpack(config);

//   app.use(webpackHotMiddleware(compiler));
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }));
// }

app.listen(PORT, function() {
	console.log('Express server is running at localhost port', PORT);
});
