// BASE SETUP
// =================================================================================
// Mongo DB Details
// ----------------
// mongo ds115712.mlab.com:15712/hrmsbob -u <dbuser> (admin) -p <dbpassword> (password)
// mongodb://<dbuser>:<dbpassword>@ds115712.mlab.com:15712/hrmsbob
// =================================================================================

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// Instantiate Express
var app = express();

// DATABASE CONNECTION
// ==============================================================================
mongoose.connect('mongodb://root:password@ds115712.mlab.com:15712/hrmsbob'); 

// Models
var Employee = require('./models/employee');

// Configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
// =============================================================================
var employeeRouter = require('./routes/employee.router')(Employee);


// REGISTER ROUTES -------------------------------
// All of the routes will be prefixed with /api
app.use('/api', employeeRouter);


app.get('/', function(req, res) {
    res.json({ "Status": "HRMS API is running at port: " + port });
});

// START THE SERVER
// =============================================================================
app.listen(port, function() {
    console.log('MBBM Rest API running at port: ' + port);
});