// ---------- EXAMPLE 3 <li> ----------

// STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");

let h1 = document.createElement("h1");

h1.textContent = "Hello World"
h1.id="myH1";
h1.style.color="blue";

document.body.append(h1);

// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// // STEP 3 APPEND ELEMENT TO DOM
// // document.body.append(newListItem);
// // document.body.prepend(newListItem);
// // document.getElementById("fruits").append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);
// document.body.insertBefore(h1, p);
// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// // const box4 = document.getElementById("box4");
// // document.body.insertBefore(newLink, box4);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newLink, boxes[4]);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[4]);


// // REMOVE HTML ELEMENT
// // document.body.removeChild(newLink);
// // document.getElementById("box1").removeChild(newLink);

// document.body.removeChild(h1);