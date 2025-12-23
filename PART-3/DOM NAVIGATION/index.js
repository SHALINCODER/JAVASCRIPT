// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// ---------- .firstElementChild ----------

const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// Or apply to all ul elements
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});


// ---------- .lastElementChild ----------

const element2 = document.getElementById("desserts");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "yellow";

// Or apply to all ul elements
const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});


// ---------- .nextElementSibling ----------

const element3 = document.getElementById("pie");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";


// ---------- .previousElementSibling ----------

const element4 = document.getElementById("ice_cream");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";


// ---------- .parentElement ----------

const element5 = document.getElementById("carrots");
const parent = element5.parentElement;
parent.style.backgroundColor = "yellow";


// ---------- .children ----------

const element6 = document.getElementById("fruits");
const children = element6.children;

console.log(children);

// Using Array.from().forEach()
const element7 = document.getElementById("desserts");
const children2 = element7.children;

Array.from(children2).forEach(child => {
    child.style.backgroundColor = "yellow";
});

// Access specific child by index
const element8 = document.getElementById("fruits");
const children3 = element8.children;

children3[1].style.backgroundColor = "yellow";