var PORT = process.env.PORT || 8080;
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(request, response) {
	response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function() {
	console.log('Express server is running at localhost port', PORT);
});