var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Function for when a new task needs to be added to the to do list.
var createTaskHandler = function(event) {
    // prevents the browser from running default software on form submition.
    event.preventDefault();
    // creates a variable that is assigned the value of a specific input element's input.
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);
    // creates a DOM object and assigns it to a newly created li element.
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// Adds an event listener to the DOM object buttonEl that references
// the only button on the webpage in the html. This event listener
// waits for an event, in this case "click", and then performs a 
// function in response. createTaskHandler was used here as a callback
// function.
formEl.addEventListener("submit", createTaskHandler);
