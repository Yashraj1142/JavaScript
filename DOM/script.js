//Example 1
let changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", function(){
    let myParagraph = document.getElementById("myParagraph");
    myParagraph.textContent = "The paragraph is changed.";
})


//Example 2
let highlightFirstCity = document.getElementById("highlightFirstCity");

highlightFirstCity.addEventListener("click", function() {
    let ulList = document.getElementById("citiesList");
    ulList.firstElementChild.classList.toggle("highlight");
})

//Example 3
let changeOrder = document.getElementById("changeOrder");

changeOrder.addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
});

//Example 4
let addNewItem = document.getElementById("addNewItem");

addNewItem.addEventListener("click", function() {
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5
let removeTaskList = document.getElementById("removeTaskList");

removeTaskList.addEventListener("click", function() {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});

//Example 6
let foodList = document.getElementById("foodList");

foodList.addEventListener("click", function(event) {
    if(event.target && event.target.matches(".foodItem")){
        alert("You selected: " + event.target.textContent);
    }
});

// Example 7
let feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let value = document.getElementById("feedbackInput").value;
    let feedbackDisplay = document.getElementById("feedbackDisplay");
    feedbackDisplay.textContent = value;
});