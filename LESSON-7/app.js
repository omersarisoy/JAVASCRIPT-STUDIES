/*
function hello(){
    console.log("Hello World!");
}

hello()
*/

/*
function sum(a,b){
    console.log(a+b);
}

sum(12,3)
*/

/*
function sum(a,b){
    return (a+b);
}

sum(12,3)  //sonucu göremedik. return ü yakala!...

console.log(sum(12,3));
console.log(sum(12,3)+5);
*/

/*
function sum(a,b){
    //return (a+b);  // number
    //return ("Hello")  // string
    console.log("selam");  // undefined
}

console.log(typeof sum());
*/  

/*
function addTwo(number){
  //return number + 2;  // 22
    return +number + 2;  // 4 (+ ile gelen stringi number yapar.)
}

console.log(addTwo("2")); 
*/

/*
function greeting(name = "New User"){
    console.log(`Hello ${name}`);
}

greeting("Ömer")
greeting("Veysel")
greeting()
*/

/*
function sayHi(myName){
    console.log(`Hello ${myName}`);
    myName = "Veysel"
    console.log(`Hello ${myName}`);
}

let myName = "Ömer"
sayHi(myName)
console.log("Outside function", myName);
*/

/*
let student = {};
student.name = "Ömer"

function sayHi2(student){
    console.log(`Hello ${student.name} entry point`);
    student.name = "Veysel"
    console.log(`Hello ${student.name} first point`);
    student = {name : "Hakan"}
    console.log(`Hello ${student.name} inside function`);
}

sayHi2(student)
console.log(`Hello ${student.name} outside function`);
 */

/*
function div(num1, num2){
    if(num2 === 0){
        return("Zero Division Error");
    }
    return(num1/num2);
}

console.log(div(12,0));
console.log(div(12,3));
*/

/*
function div2(num1, num2){
    return num2 ? num1 / num2 : "Zero Division Error"  // Ternary
}

console.log(div2(18,0));
console.log(div2(18,3));
*/ 

/*
function sum(){
    let total = 0;
    for(i = 0; i<arguments.length; i++){
        total += arguments[i]
    }
    return(total)
}

console.log(sum(1,2,3,4,5));
*/

/*
function sum2(a,b, ...args){
    console.log(args);
    console.log(arguments);
    return(a+b)
}

console.log(sum2(1,2,3,4,5));
*/

/*
function sayHi1(){
    return "hello from sayHi1"
}

console.log(sayHi1());
*/


/*
const sayHi2 = function greet(){
    return "hello from sayHi2"

}
console.log(sayHi2());
console.log(greet());  // değişkene tanımladığımız için isimle gelmez.
*/

/*
const pascalNumber = function(n){
    return(n*(n+1)/2)
}

console.log(pascalNumber(100));
*/


/*
// Recursive Function

const pascalNumber = function total (n){
    if(n === 1) return 1;
    return(n) + total(n-1)

}

console.log(pascalNumber(4));
*/