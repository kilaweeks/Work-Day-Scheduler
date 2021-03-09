
// Sets current date at top of page 
var today = document.getElementById("currentDay");
today.textContent = moment().format('dddd[,] MMMM Do YYYY');


var content9 = document.querySelector(".text-9am");
var content10 = document.querySelector(".text-10am");
var content11 = document.querySelector(".text-11am");
var content12 = document.querySelector(".text-12pm");
var content13 = document.querySelector(".text-1pm");
var content14 = document.querySelector(".text-2pm");
var content15 = document.querySelector(".text-3pm");
var content16 = document.querySelector(".text-4pm");
var content17 = document.querySelector(".text-5pm");

// Retrieve content from local storage
content9.textContent = localStorage.getItem("9:00am"); 
content10.textContent = localStorage.getItem("10:00am"); 
content11.textContent = localStorage.getItem("11:00am"); 
content12.textContent = localStorage.getItem("12:00pm"); 
content13.textContent = localStorage.getItem("1:00pm");
content14.textContent = localStorage.getItem("2:00pm");
content15.textContent = localStorage.getItem("3:00pm");
content16.textContent = localStorage.getItem("4:00pm"); 
content17.textContent = localStorage.getItem("5:00pm");


// Store content on button click
document.querySelector(".btn-9am").addEventListener("click", storeContent9);
document.querySelector(".btn-10am").addEventListener("click", storeContent10);
document.querySelector(".btn-11am").addEventListener("click", storeContent11);
document.querySelector(".btn-12pm").addEventListener("click", storeContent12);
document.querySelector(".btn-1pm").addEventListener("click", storeContent13);
document.querySelector(".btn-2pm").addEventListener("click", storeContent14);
document.querySelector(".btn-3pm").addEventListener("click", storeContent15);
document.querySelector(".btn-4pm").addEventListener("click", storeContent16);
document.querySelector(".btn-5pm").addEventListener("click", storeContent17);

// Store content to local storage 
function storeContent9() {
    var savedContent9 = content9.value;
    console.log(savedContent9);    
    localStorage.setItem("9:00am", savedContent9);
}

// Store content to local storage 
function storeContent10() {
    var savedContent10 = content10.value;  
    localStorage.setItem("10:00am", savedContent10);
}

// Store content to local storage 
function storeContent11() {
    var savedContent11 = content11.value;   
    localStorage.setItem("11:00am", savedContent11);
}

// Store content to local storage 
function storeContent12() {
    var savedContent12 = content12.value;   
    localStorage.setItem("12:00pm", savedContent12);
}

// Store content to local storage 
function storeContent13() {
    var savedContent13 = content13.value;   
    localStorage.setItem("1:00pm", savedContent13);
}

// Store content to local storage 
function storeContent14() {
    var savedContent14 = content14.value;   
    localStorage.setItem("2:00pm", savedContent14);
}

// Store content to local storage 
function storeContent15() {
    var savedContent15 = content15.value;   
    localStorage.setItem("3:00pm", savedContent15);
}

// Store content to local storage 
function storeContent16() {
    var savedContent16 = content16.value;   
    localStorage.setItem("4:00pm", savedContent16);
}

// Store content to local storage 
function storeContent17() {
    var savedContent17 = content17.value;   
    localStorage.setItem("5:00pm", savedContent17);
}

// Get current time and turn it into an integer
currentTime = parseInt(moment().format('HH:mm:ss')); 
console.log(currentTime); 

// If current hour block, turn red
if (currentTime === 9) {
    content9.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 9) {
    content9.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 9) {
    content9.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 10) {
    content10.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 10) {
    content10.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 10) {
    content10.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 11) {
    content11.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 11) {
    content11.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 12) {
    content11.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 12) {
    content12.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 12) {
    content12.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 12) {
    content12.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 13) {
    content13.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 13) {
    content13.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 13) {
    content13.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 14) {
    content14.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 14) {
    content14.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 14) {
    content14.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 15) {
    content15.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 15) {
    content15.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 15) {
    content15.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 16) {
    content16.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 16) {
    content16.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 16) {
    content16.style.backgroundColor = "#d9d9d9";
}

// If current hour block, turn red
if (currentTime === 17) {
    content17.style.backgroundColor = "#ff8080"; 
// If after current hour block, turn green
} else if (currentTime < 17) {
    content17.style.backgroundColor = "#c6ffb3";
// If before current hour block, turn gray
} else if (currentTime > 17) {
    content17.style.backgroundColor = "#d9d9d9";
}