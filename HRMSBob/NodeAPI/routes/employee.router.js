var express = require('express');
var EMP_ID_SEED_VALUE = 1000;

var routes = function(Employee) {
    var employeeRouter = express.Router();

    employeeRouter.route('/employees')

    // Add a new employee
    .post(function(req, res) {
        var employee = new Employee();

        // Params come from request body
        employee.Name = req.body.Name;
        employee.Contact = req.body.Contact;
        employee.DepartmentID = req.body.DepartmentID;
        employee.ReportingTo = req.body.ReportingTo;
        employee.IsActive = true;

        // Generate new employee number
        var maxEmployeeID = EMP_ID_SEED_VALUE;
        Employee.findOne({}).sort('-EmployeeID').exec(function(err, doc) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                if(doc) {
                    maxEmployeeID = doc.EmployeeID;
                    console.log(maxEmployeeID);
                } 
            }

            employee.EmployeeID = maxEmployeeID + 1;

            console.log(employee);

            // Save the employee data in DB
            employee.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                }
                else {
                    res.json({ ErrorCode: 0, ErrorMessage: "Employee was added.", EmployeeID: employee.EmployeeID});
                }
            });
        });
    });

    return employeeRouter;
};

module.exports = routes;