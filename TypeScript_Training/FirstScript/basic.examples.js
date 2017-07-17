var Employee = (function () {
    function Employee(name) {
        this.empName = name;
        this.empID = Employee.maxEmpNumber++;
    }
    Employee.prototype.display = function () {
        console.log('Name: ' + this.empName + ' ' + 'Employee ID: ' + this.empID);
    };
    Employee.maxEmpNumber = 1000;
    return Employee;
}());
var emp1 = new Employee('Biswaranjan');
var emp2 = new Employee('Kanaka');
var emp3 = new Employee('Ashutosh');
emp1.display();
emp2.display();
emp3.display();
