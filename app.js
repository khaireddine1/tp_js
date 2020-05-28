//Arrow function
const some = (a, b) => a + b;
//console.log(some(5, 7))


// Arrow & Callback function
const greatInt = (a, b) => a > b ? a : b;
console.log(some(8, greatInt(5, 8)))

function calculate(num) {
    return num + 7
}

function printNum(fun) {
    //typeof(fun) ==> function
    return fun(7)
}

console.log(printNum(calculate))