const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser')
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ limit: '50mb'},{ extended: true }));
// parse application/json
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`got to http://localhost:${PORT}/\n Please read whole instructions first... \n Good luck.....`));
