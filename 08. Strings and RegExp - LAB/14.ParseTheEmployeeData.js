// Input comes as an array of strings
// Valid format is {employeeName} - {employeeSalary} - {employeePosition}
function parseEmployeeData(input) {
    const pattern = /^([A-Z][A-Za-z]*)\s-\s([1-9][0-9]*)\s-\s((?:[A-Za-z0-9-]+)(?:\s+[A-Za-z0-9-]+)*?)$/gm;
    //const pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9-]+)$/;

    let result = '';

    input.forEach(e => {
       if(e.match(pattern)){
            let match = pattern.exec(e);

            if(match != null){
                result += `Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}\n`;
            }
       }
    });

    return result;
}

console.log(parseEmployeeData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee']));
console.log(parseEmployeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']));