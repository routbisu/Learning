var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Employee Schema
var schema = new Schema({
    EmployeeID : Number,
    Name : String,
    Contact : String,
    DepartmentID : String,
    ReportingTo : Number,
    IsActive : Boolean
});

module.exports = mongoose.model('employee', schema);