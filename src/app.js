const path = require('path');
const express = require('express');

const app = express();
const pathName = path.join(__dirname, '../public');
app.use(express.static(pathName));

app.get('/weather', (req, res) => {
	res.send({
		location : 'Bhiwandi',
		forecast : 'Cloudy'
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
