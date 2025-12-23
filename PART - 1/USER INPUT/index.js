// How to accept user input
// 1. easy way = window.prompt
// let username = window.prompt("What's your username?");
// console.log(username);
// alert("Welcome !");
// 2. professional way = html textbox
let username;


// username = window.prompt("What's your username?");
// console.log(username);

document.getElementById("mySubmit").addEventListener("click", function(){
    username = document.getElementById("myText").value;
    heading = document.getElementById("myH1");
    heading.innerHTML += username;
});