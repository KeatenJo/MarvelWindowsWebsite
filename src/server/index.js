var express = require('express');
var app = express();
const port = process.env.PORT || 8080;

// TODO: Fix this into proper Heroku URL once put on
app.use(cors({credentials: true, origin: 'https://marvel-glass-cleaning-passport.herokuapp.com/public/'}));
app.use('/public', express.static('public'));
app.use('/images', express.static('images'));

app.listen(port, function () {
	console.log(`Server Listening on port ${port}!`);
});
