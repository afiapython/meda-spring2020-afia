var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];


// update all of the values so we add a 5% bonus if they make
//less than 50000, or 2.5% if they make more than 50000.


for (var i = 0; i < employeeSalaries.length; i++) {
    console.log(employeeSalaries[i]);

    var salary = employeeSalaries[i];

    if (salary < 50000) {
        console.log("old salary: " + salary);
        salary = salary + (salary * .05);
        console.log("New salary: " + salary);

        employeeSalaries[i] = salary;
    } else {
        console.log("old salary: " + salary);
        salary = salary + (salary * .025);
        console.log("New salary: " + salary);

        employeeSalaries[i] = salary;

    }
}

console.log(employeeSalaries);


function salaryBonus(salary, bonus) {

    var actualBonus = salary * bonus;

    var newSalary = salary + actualBonus;

    return newSalary;

}

var test = salaryBonus(10000, .10);

console.log(test);