const PORT = process.env.PORT || 8080;
const path = require('path');
const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.use('/assets', express.static(path.join(__dirname, './public')));

app.get('*', function(_, res) {
	res.render('index');
});

app.listen(PORT, function() {
	console.log('server on running on port ', PORT);
});
