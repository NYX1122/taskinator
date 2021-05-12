var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Function for when a new task needs to be added to the to do list.
var createTaskHandler = function(event) {
    // prevents the browser from running default software on form submition.
    event.preventDefault();
    // creates a DOM object and assigns it to a newly created li element.
    var listItemEl = document.createElement("li");
    // assigns the class task-item to the DOM object listItemEl.
    listItemEl.className = "task-item";
    // assigns a text string to the DOM object listItemEl.
    listItemEl.textContent = "This is a new task";
    // appends a child element to the DOM object tasksToDoEl, which
    // references the element ul in html, by passing the DOM object 
    // listItemEl through the appendChild method.
    tasksToDoEl.appendChild(listItemEl);
}

// Adds an event listener to the DOM object buttonEl that references
// the only button on the webpage in the html. This event listener
// waits for an event, in this case "click", and then performs a 
// function in response. createTaskHandler was used here as a callback
// function.
formEl.addEventListener("submit", createTaskHandler);
