// var a = "5";
// var b = 3;
// console.log(a+b);
// console.log(a+a);
// console.log(b+b);
// console.log(typeof (a+b));  // sadece toplamada concatnate yapıyor ve string oluyor.
// console.log(typeof (b+b));

// console.log(a-b);
// console.log(typeof (a-b));

// let x  = 150 + 50 * 3;
// console.log(x);
/********************************************************************************************/

/* Logical operators
​
OR ||			And &&				Not  !
0 0 -> 0		0 0 -> 0			0 -> 1
0 1 -> 1		0 1 -> 0			1 -> 0
1 0 -> 1		1 0 -> 0
1 1 -> 1		1 1 -> 1
 */

// let  x = false && 0 ;
// console.log(x); 

// let  y = 0 && false ;
// console.log(y);

// let z = 1 && 2;
// console.log(z);

// NaN ve null da falsy değer olarak davranır.

/************************************************* */

// var a = 2 || 3;
// console.log(a);

// var b = 0 || 3;
// console.log(b);

// var c = 0 || false;
// console.log(c);

/*********************************************** */

// var b = 0 || 3;
// console.log(!b);  // verilen boolean deeğerin tersini döndürür.

//Nullish Operator

// var a = null
// console.log(a ?? "Hello");  //  null vs text output text
// console.log(a ?? 3);  //  null vs text output number
// console.log(a ?? 3);  //  null vs text output number


// var a;
// console.log(a ?? "Hello");  // undefined  vs text output text
// console.log(a ?? 3);  //  undefined vs text output number


// var a = 0 ;
// console.log(a ?? "Hello");  // undefined  vs text output text
// console.log(a ?? 3);  //  undefined vs text output number


// NULLISH COALESCING DE SADECE NULL VE UNDEFINED OLURSA İKİNCİ DEĞER (yani null ve undefıned ı atlar.) , DİĞER BÜTÜN DURUMLARDA İLK DEĞER DÖNER.

/******************************************************************************** */

// If Else Yapıları

// let score = 50;

// console.log(score < 50);

// if (score >= 50){
//     console.log("Tebrikler");
// }


// if (score >= 50) console.log("Tebrikler2");

// if (score >= 80){
//     console.log("Bravoo!");
// }else{
//     console.log("Daha çok çalısmalısın! ");
// }


// Ternary Operatörü (if-else kısaltması) >>>>  condition ? expIfTrue : expIfFalse;

// score > 80 ? console.log("Bravoo!") : console.log("Daha çok çalısmalısın! ");

/******************************************************************************** */

// let score = prompt("Sınavdan kaç aldın?")  // kullanıcıdan not al

// if (score > 80){
//     console.log("Tebrikler");
// }else if(score >= 50){
//     console.log("Fena Değil");
// }else{
//     console.log("Daha çok çalışmalısın");
// }

/*********************************************************************************** */

// let userName = null

// userName ? console.log(`Hello ${userName}`) : console.log("Please Login");

// If-else If-ternary

// let score = 50;
// score > 80 ? console.log("Tebrikler") :  score >= 50 ? console.log("Fena Değil"): console.log("daha çok çalışmalısın")

/***************************************************************************************** */

// Switch-Case

// var text;
// var fruits = "lemoN" 
// fruits = fruits.toLowerCase();

// switch (fruits){
//     case "banana":
//         text = "Banana is good";
//         break;
//         case "lemon":
//     case "orange":
//         text = "I am not fan of orange";
//         break;
//     case "apple":
//         text = "How you like them apples?"
//         break;
//     default:
//         text = "I have never heard of that fruit..."
// }

// console.log(text);

/**************************************************************************************** */
// let text ;
// let userday = prompt("bir gün giriniz");
// day = userday.toLowerCase();

// switch(day){
//     case "pazartesi":
//     case "çarşamba": 
//     case "perşembe":
//     case "cumartesi":
//         text = "in-class var!";
//         break;
//     case "salı":
//     case "cuma":
//         text = "teamwork var"
//         break;
//     default:
//         text = "tatil günü"

// }

// console.log(text);

/******************************************************************************** */

// let day = prompt("bir gün giriniz");

// switch(day.toLowerCase()){
//     case "pazartesi":
//     case "çarşamba": 
//     case "perşembe":
//     case "cumartesi":
//         console.log("in-class var!");
//         break;
//     case "salı":
//     case "cuma":
//         console.log("teamwork var");
//         break;
//     default:
//         console.log("tatil günü");

// }
/******************************************************************************** */