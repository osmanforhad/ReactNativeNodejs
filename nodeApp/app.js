//include the developer created file
const arithmetic = require('./arithmetic');

//declare a variable nad call the function and pass the paramiter
numbers = arithmetic.addNumbers(4, 6);

console.log('The result is:' + numbers);

console.log(arithmetic.oddEvenChecker('So : ' + numbers));