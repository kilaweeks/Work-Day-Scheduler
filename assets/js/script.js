
// Sets current date at top of page 
var today = $("#currentDay");
today.text(moment().format('dddd[,] MMMM Do YYYY'));


var content9 = $(".text-9am");
var content10 = $(".text-10am");
var content11 = $(".text-11am");
var content12 = $(".text-12pm");
var content13 = $(".text-1pm");
var content14 = $(".text-2pm");
var content15 = $(".text-3pm");
var content16 = $(".text-4pm");
var content17 = $(".text-5pm");

// Retrieve content from local storage
content9.text(localStorage.getItem("9:00am")); 
content10.text(localStorage.getItem("10:00am")); 
content11.text(localStorage.getItem("11:00am")); 
content12.text(localStorage.getItem("12:00pm")); 
content13.text(localStorage.getItem("1:00pm"));
content14.text(localStorage.getItem("2:00pm"));
content15.text(localStorage.getItem("3:00pm"));
content16.text(localStorage.getItem("4:00pm")); 
content17.text(localStorage.getItem("5:00pm"));


// Store content on button click
$(".btn-9am").on("click", storeContent9);
$(".btn-10am").on("click", storeContent10);
$(".btn-11am").on("click", storeContent11);
$(".btn-12pm").on("click", storeContent12);
$(".btn-1pm").on("click", storeContent13);
$(".btn-2pm").on("click", storeContent14);
$(".btn-3pm").on("click", storeContent15);
$(".btn-4pm").on("click", storeContent16);
$(".btn-5pm").on("click", storeContent17);

// Store content to local storage 
function storeContent9() {
    var savedContent9 = content9.val();
    console.log(savedContent9);    
    localStorage.setItem("9:00am", savedContent9);
}

// Store content to local storage 
function storeContent10() {
    var savedContent10 = content10.val();  
    localStorage.setItem("10:00am", savedContent10);
}

// Store content to local storage 
function storeContent11() {
    var savedContent11 = content11.val();   
    localStorage.setItem("11:00am", savedContent11);
}

// Store content to local storage 
function storeContent12() {
    var savedContent12 = content12.val();   
    localStorage.setItem("12:00pm", savedContent12);
}

// Store content to local storage 
function storeContent13() {
    var savedContent13 = content13.val();   
    localStorage.setItem("1:00pm", savedContent13);
}

// Store content to local storage 
function storeContent14() {
    var savedContent14 = content14.val();   
    localStorage.setItem("2:00pm", savedContent14);
}

// Store content to local storage 
function storeContent15() {
    var savedContent15 = content15.val();   
    localStorage.setItem("3:00pm", savedContent15);
}

// Store content to local storage 
function storeContent16() {
    var savedContent16 = content16.val();   
    localStorage.setItem("4:00pm", savedContent16);
}

// Store content to local storage 
function storeContent17() {
    var savedContent17 = content17.val();   
    localStorage.setItem("5:00pm", savedContent17);
}

// Get current time and turn it into an integer
currentTime = parseInt(moment().format('HH:mm:ss')); 
console.log(currentTime); 

const textAreas = $("textarea");
console.log(textAreas); 

textAreas.each(function() {
    var currentTextArea = $(this); 
    var hour = currentTextArea.data("hour"); 
    if (currentTime === hour) {
        currentTextArea.css({backgroundColor: "#ff8080"}); 
    // If after current hour block, turn green
    } else if (currentTime < hour) {
        currentTextArea.css({backgroundColor: "#c6ffb3"});
    // If before current hour block, turn gray
    } else if (currentTime > hour) {
        currentTextArea.css({backgroundColor: "#d9d9d9"});
    }
})