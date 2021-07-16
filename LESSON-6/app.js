// While Loops
/*
let i = 0, sum = 0;

while (i<6) {
    sum += i;
    console.log(i);
    i++;
}
 console.log(`Total is ${sum}`); 
 */

// 2- do...while
/*
let i = 3;
sum = 0;

do {
    sum += i;
    i++;
} while (i < 5);
console.log(sum);  
*/

// 3- FOR LOOPS

/*
for (let i = 0; i < 8; i++) {
    console.log("i:",i);    
}
*/

/*
let counter = 0;

for (let i = 0; i <= 50; i++){
    counter += i;
    console.log(counter);
}
*/
/*
let counter = 0;

for (let i = 0; i <= 50; i++){
    if (i % 10 === 0) {
        counter += i;
    }  
}
console.log(counter);
*/

/*
let counter = 0;

for (let i = 0; i <= 50; i++){
    i % 10 === 0 ? (counter += i) : null;   
}
console.log(counter);
*/

/*
let brand = "clarusway"

for (let i = 0; i < brand.length; i++){
    console.log(i+1 + ":", brand[i], brand.length - i, brand[brand.length - i-1]);
}
*/

/*
let brand = "clarusway"

for ( let i = 0, j = brand.length; i < brand.length;
    i++ , j--){
        console.log(i+1, brand[i], j, brand[j-1]);
    } 
*/

/*
let bests = ["Clarusway", "Google", "Amazon", "Tesla"]

for (let i =0; i < bests.length; i++){
    console.log(i+1, bests[i]);
    document.write("<h1>",i+1 + " : ", bests[i],"<h1/>", "<br/>");
}
*/

// 4-Break Statement

/*
let i = 0;
while (i < 10) {
    if (!(i % 3 === 0)) {
    // break
    console.log(i);
    }
i++
}
*/

// 5-Continue Statement

/*
let i = 0;
while (i < 10) {
    i++
    if ((i % 3 === 0)) {
        continue
    }
    console.log(i);
}
*/

/*
let i = 0;
for ( i = 0; i < 7; i++){
    if(i === 2 || i === 4){
        continue;
    }
    console.log(i);
} 
*/

/*
let brand = "clarusway";
len = brand.length;
let text = ""
for (i = 0; i < len; i++){
    console.log(brand[len - i - 1]);

    text += brand[len - i - 1]    
}
console.log(text);
document.write(text)
*/

/*
//ÇARPIM TABLOSU
for (let i = 1; i<=10; i++){
    for (let j = 1; j<=10; j++){

        console.log(`${i}*${j}=${i*j}`);
        document.write(`${i}*${j}=${i*j}`, "<br/>");
    }
}
*/

/*
const number = [13, 34, 24, 67, 23, 90]
let len = number.length
let result = 0

for (i = 0; i < len; i++){
    result += number[i]
}
console.log(result);
*/

/*
const numb = prompt("Enter a number!")
let result = 1;
for (i = 1; i <= numb; i++){
    result *= i
}
console.log(result);
*/

/*
// Fizz Buzz Numbers
for (i = 1; i <= 100; i++){
    
    if(i % 3 ===0 && i % 5 === 0){
        console.log("fizz-buzz");
    }
    else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }
    else console.log(i);
    
}
*/