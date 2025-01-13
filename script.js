function square(a){
    return a * a
}

const greet = (name) => `Hello ${name}!`

function caller(){
    let count = 5;
    return function called(){
        count ++;
        return count;
    }
}
let nums = [1,2,3,4,5]
const sum = (function (num){
   return num.reduce((a, b) => a + b);
})(nums);


const counter = caller()
console.log(greet("Keith"))
console.log(square(5))
console.log(counter());
console.log(counter());
console.log(counter());
console.log(sum);
