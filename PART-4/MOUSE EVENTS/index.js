// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// ---------- INLINE EVENT LISTENER ----------
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😭";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😲";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😊";
});


// ---------- USING A FUNCTION ----------
const myBox2 = document.getElementById("myBox");

function changeColor(event){
    console.log(event);
}

myBox2.addEventListener("click", changeColor);

// With functionality
function changeColor2(event){
    event.target.style.backgroundColor = "red";
}

myBox2.addEventListener("click", changeColor2);

// Complete function
function changeColor3(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😭";
}

myBox2.addEventListener("click", changeColor3);


// ---------- BUTTON CONTROLLING BOX ----------
const myBox3 = document.getElementById("myBox");
const myButton2 = document.getElementById("myButton");

myButton2.addEventListener("click", event => {
    myBox3.style.backgroundColor = "tomato";
    myBox3.textContent = "OUCH! 😭";
});

myButton2.addEventListener("mouseover", event => {
    myBox3.style.backgroundColor = "yellow";
    myBox3.textContent = "Don't do it 😲";
});

myButton2.addEventListener("mouseout", event => {
    myBox3.style.backgroundColor = "lightgreen";
    myBox3.textContent = "Click Me 😊";
});