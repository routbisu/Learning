class Employee {
    empName : string;
    empID : number;

    static maxEmpNumber = 1000;

    constructor(name: string) {
        this.empName = name;
        this.empID = Employee.maxEmpNumber++;
    }

    display() {
        console.log('Name: ' + this.empName + ' ' + 'Employee ID: ' + this.empID);
    }
}

var emp1 = new Employee('Biswaranjan');
var emp2 = new Employee('Kanaka');
var emp3 = new Employee('Ashutosh');

emp1.display();
emp2.display();
emp3.display();

// ---------------------- Other stuff --------------------
// Optional parameter
var someFunc = function(var1: number, var2?: number) {
    return var1 + var2;
}
someFunc(1);

// Rest paramters
function addNumbers(param1: string, param2: string, ...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers('SomeString', 'SomeString2', 1,2,3);

// Default Parameters
function calculate_discount(price: number, rate: number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

// Recursive function
function factorial(num: number) {
    // Termination case
    if(num <= 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

console.log(factorial(6));

var addNumber = (val1: number, val2: number) => val1 + val2;
console.log(addNumber(2, 3));