console.log("Hello World")
console.info("some info")
console.warn("some warning")
console.error("error !!!!")
var myName = "Ömer"
console.log(myName)

myNema = "Davut"
console.log(myName)

var announce = "Welcome to Clarusway"
console.log(announce)

annuonce = "WELCOME"  // değişkenin ismi hatalı olduğu için çıktı vermez.
console.log(announce)

var num = 4
console.log(num*num)

const PI = 3.141521;

let myNum = 5;

console.log(PI);

// PI = myNum //
// console.log(PI)  sabite farklı değer atayamayız.//

myNum = PI * 4;
console.log(myNum)


let PORT = 3
console.log(PORT)

PORT = 300;
console.log(PORT)

// alert("merhaba")

// var country = prompt("Enter your country")
// console.log("Your country is", country)

/* var num1 = 42;
var num2; undefined mesajı verir.
if(num1 = 42) {
    let num2 = 22;
    var num2 = 22;
    console.log(num1,num2)
}
let num2 = 22; //Cannot access 'num2' before initialization

var num2 = 33; undefined mesajı verir.
const num2 = 33; Cannot access 'num2' before initialization */

/* 
 XXXXX 
 1- let ve const u TANIMLANDIĞIMIZ ANDAN İTİBAREN KULLANABİLİRİZ. TANIMLAMADAN ÖNCE KULLANMAYIZ.

 2- ÖNCESİNDE VEYA SONRASINDA AYNI DEĞİŞKENİ LET VE CONST LA (zaten tanımlayamıyorduk) BİR DAHA TANIMLAYAMAYIZ (VAR DAHİL). HATA VERİR. HERHANGİ BİR FONSİYON OLMADAN (LET,CONST, VAR)SADECE DEĞİŞKEN OLARAK TANIMLAYABİLİRİZ.

 3-VAR ı İSTEDİĞİMİZ YERDE TANIMLAYABİLİRİZ
 XXXXX
 */


// var num1 = 42;
// console.log(num1,num2);
// if(num1 = 42) {
//     var num2 = 22;
//     console.log(num1,num2)
// }
// var num2 = 88;
// console.log(num1,num2);



let num1 = 42;
// console.log(num1,num2); Cannot access 'num2' before initialization
console.log(num1)
if(num1 = 42) {
    let num2 = 22;
    console.log(num1,num2)
}
// let num2 = 88;
console.log(num1,num2)

var num2 = 88;
num1 = "ÖMEROOOOO"
console.log(num1,num2);

/* let BLOCK SCOPE yani tanımlandığı block da geçerlidir. Bloğun dışına çıkıldığında geçerli olmaz. 

var ise FUNCTION SCOPE dur. Yani anaçatı veya fonksiyon da kullanabiliriz. */

