 // JS DOM


 // BY ID

//  const myDom = document.getElementById("dom")
//  console.log(myDom);

// const instructor = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);

// BY CLASSNAME

// const withClassName = document.getElementsByClassName("class-info");
// console.log(withClassName[0]);

// BY TAGNAME

// const cw = document.getElementsByTagName("h3");
// console.log(cw);


// document.querySelector

// console.log(document.querySelectorAll(".class-info")); 

// console.log(document.querySelector("#instructor")); 

// console.log(document.querySelectorAll("h3")[1]);

// console.log(document.querySelector("div h3")); 

// console.log(document.querySelector("#info h3")); 

// console.log(document.querySelector(".class-info h3"));  

////////////////////////////////////////////////////////////////////////

// Manipulation

/*
const brands = document.querySelector("#brands");

console.log(brands);

brands.innerHTML += `<li>NioyaTech</li>`
brands.innerHTML = brands.innerHTML + `<li style="color:red">NioyaTech</li>`
*/

/*
const classBrands = document.querySelectorAll(".brand");
console.log(classBrands[3].innerText);
*/

/*
const copyRight = document.querySelector("footer p");
console.log(copyRight); 

copyRight.innerHTML = "<h1> &copy; 2020 clarusway.com</h1>"
*/
 

// const lesson = document.querySelector("#lessons");
// console.log(lesson);

/*const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
  ];

  
  lessonList.forEach(element => {
      lesson.innerHTML += `<li>${element.name}</li>`
  });*/

////////////////////////////////////////////////////////////////////////

// setAttribute getAttribute


// const mdn = document.querySelector("#mdn");
// console.log(mdn);

// const mdnHrefAttr = mdn.getAttribute("href");
// console.log(mdnHrefAttr);

// mdn.setAttribute("href", "https://www.w3schools.com/");
// mdn.innerHTML = "W3Schools"

////////////////////////////////////////////////////////////

//  const insElm = document.querySelectorAll("#instructor li");
//  console.log(insElm);

/*
insElm.forEach(item => {
    console.log(item.innerText.includes("FrontEnd"));
    if(item.innerText.includes("FrontEnd")){
        item.setAttribute("class","front-end")
    }else if(item.innerText.includes("BackEnd")){
        item.setAttribute("class","back-end")
    }
});
*/


// Add style manually with js

/*
const jsPrg = document.querySelector("#js-prg");
console.log(jsPrg);

jsPrg.style.color = "green";
jsPrg.style.backgroundColor = "red";
jsPrg.style.fontSize = "1rem";
*/


// const cwBanner = document.getElementById("cw-banner");
// console.log(cwBanner);


// console.log(cwBanner.classList);

// cwBanner.classList.add("imp")
// cwBanner.classList.remove("banner")

// console.log(cwBanner.classList);


///////////////////////////////////////////////////////////
/*
const cwQuote = document.querySelector("#qoute-div")
console.log(cwQuote);

cwElm = document.createElement("h2")
console.log(cwElm);
cwElm.innerText = "Clarusway"
cwQuote.appendChild(cwElm)
*/