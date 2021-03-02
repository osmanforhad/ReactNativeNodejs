function addNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
} //end of the addNumbers method

function oddEvenChecker(number) {
    if (number % 2 === 0) {
        return number + " is an Even Number";
    } else {
        return number + " is an Odd Number"
    }
} //end of the oddEvenChecker method

//export function for out put
module.exports.addNumbers = addNumbers;
module.exports.oddEvenChecker = oddEvenChecker;