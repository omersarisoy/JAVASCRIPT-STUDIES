/*var str1 = "Hello";
var str2 = 'world';
var str3 = `Hello world`;
var str4 = new String("A string Object");
var str5 = String(123);*/
​
/* console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4);
console.log(typeof str5);
console.log(str4);
console.log(str3); */
​
//lenght
/* console.log('Hello  Merhaba'.length);
console.log(str2.length);
console.log(str3.length);
console.log(str4.length);
 */
​
​
//concat
/* var s1 = "Hello ";
var s2 = "World!";
var s3 = s1.concat(s2);
console.log({s3});
console.log({s1});
console.log({s2});
console.log( s1.concat(s2));
console.log(s1+''+s2); */
​
//charAt()
// var a = 'primitive.\nlerin properti veya metodu olmaz'
// console.log(a.charAt(0));
// console.log(a[0]);
// console.log(a);
// console.log(a.charAt(8));
// console.log(a.charAt(9));
// console.log(a.charAt(10));
// console.log(a.charAt(11));
// console.log(a.charAt());
// console.log('Hello World'.charAt(6));
//  console.log(a.charAt(a.length-1)); //son elemana ulaşmak
​
/* //includes
var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(str.includes('simply')); //true
console.log(str.includes('Simply')); //case sensitive
console.log('Hello World'.includes('ell')); //true */
​
​
/* // indexof
var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
var n = str.indexOf("simply");
var n = str.indexOf("x");
var n = str.indexOf("xx");
console.log(n); */
​
/* //lastindexoff
var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(str.length);
​
console.log(str.lastIndexOf('t'));
 */
​
/* //replace ilk gördüğü eşleşmeyi değiştirir.
​
var s = "Lorem Ipsum is simply dummy text of the printing and printing typesetting industry.";
var rep = s.replace("printing", "Replace Method")
console.log(rep); */
​
//Search
​
/* var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
​
console.log (s.search("dummy"));
console.log (s.search("Dummy"));
console.log (s.search(/Dummy/i)); */
​
/* //slice
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
console.log (s.slice(0,5));
console.log (s.slice(6, 11));
console.log (s.slice(12));
console.log (s.slice(12, -10)); */
​
/* //split
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
var arr = s.split("e"); //e lerin hepsini çıkarır
var arr = s.split(""); //harf harf ayırır
​
console.log (arr); */
​
/* //substr
​
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
console.log (s.substr(22, 10));
console.log(s.length);
console.log (s.substr(80, 10));
*/
​
​
/* //substring
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
console.log (s.substring(22, 32)); //İki index arasını ayırır */
​
//toLowerCase
​
/* var s = "Lorem Ipsum is Simply Dummy Text";
console.log(s.toLowerCase());
​
//toUppercase
console.log(s.toUpperCase()); */
​
/* var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toUpperCase());
var pangramUpper = pangram.toLocaleUpperCase();
console.log(pangramUpper);
console.log(pangramUpper.toLocaleLowerCase('tr-TR')); //Eğer browser tr ise 'tr-TR' optional */ 
​
​
//trim
/* var s = "                 <-Welcome \t to Clarus\tway->                 ";
var ss = "\t<-Welcome \t to Clarus\tway->\t";
console.log(ss);
console.log (ss. trim());
console.log(s.trim()); */