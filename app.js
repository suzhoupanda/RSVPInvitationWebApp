

const deleteButton = document.querySelector('.task-delete-button');
const editButton = document.querySelector('.task-edit-button'); 
const addTaskButton = document.getElementById('addTaskButton');
const taskItemInputField = document.querySelector('.task-item input');

const taskSet = document.querySelector('.task-set');
const finalText = document.querySelector('.final-text');


const firstTask = document.querySelector('.task-set').firstElementChild;
const lastTask = document.querySelector('.task-set').lastElementChild;


const defaultColor = "black";
const selectedColor = "#4286f4";
firstTask.querySelector('.final-text').style.color = selectedColor;
const isSelectedValue = "selected";
firstTask.setAttribute("status", isSelectedValue);

const nextButton = document.querySelector('#selectNextSibling');
const previousButton = document.querySelector('#selectPreviousSibling');

nextButton.addEventListener('click',(e) => {
	var taskItems = document.querySelector('.task-set').children;
	var currentSelection;

	for(var i = 0; i < taskItems.length; i++){
		var currentTaskItem = taskItems[i];
		var currentTaskDescription = currentTaskItem.querySelector('.final-text');
		if(currentTaskItem.getAttribute("status") == isSelectedValue){
			currentSelection = currentTaskItem;
			console.log("Task Number " + i +" is the selected task item");
		}
	}

	var nextTaskItem = currentSelection.nextElementSibling;

	if(!nextTaskItem){
		nextTaskItem = firstTask;
	}

	currentSelection.removeAttribute("status");
	currentSelection.querySelector('.final-text').style.color = defaultColor;
	nextTaskItem.setAttribute("status", isSelectedValue);
	nextTaskItem.querySelector('.final-text').style.color = selectedColor;

});

previousButton.addEventListener('click',(e) => {
	var taskItems = document.querySelector('.task-set').children;
	var currentSelection;

	for(var i = 0; i < taskItems.length; i++){
		var currentTaskItem = taskItems[i];
		var currentTaskDescription = currentTaskItem.querySelector('.final-text');
		if(currentTaskItem.getAttribute("status") == isSelectedValue){
			currentSelection = currentTaskItem;
			console.log("Task Number " + i +" is the selected task item");
		}
	}

	var previousTaskItem = currentSelection.previousElementSibling;
	
	if(previousTaskItem == undefined){
		previousTaskItem = document.querySelector('.task-set').lastElementChild;
	}

	currentSelection.removeAttribute("status");
	currentSelection.querySelector('.final-text').style.color = defaultColor;
	previousTaskItem.setAttribute("status", isSelectedValue);
	previousTaskItem.querySelector('.final-text').style.color = selectedColor;

});

previousButton.addEventListener('click',(e) => {
	console.log(e.target + "is currently selected" + "Previous item selected...");
});


/**
Adds an event handler for blur events for each of the task-items in the task-set element by
looping through each of the task-item elements and adding a listener;  This function is called after the page 
load, and each time a new task item is added to the task-set element
**/
var addBlurListeners = function(){
	var taskItems = document.getElementsByClassName('task-set')[0].children;
	for(let i = 0; i < taskItems.length; i++){
		var currentTaskItem = taskItems[i];
		var currentTaskInputField = currentTaskItem.querySelector('input');
		currentTaskInputField.addEventListener('blur',(e) => {
			var currentInputField = e.target;
			var currentText = currentInputField.value;
			var hiddenText = currentInputField.parentNode.querySelector('.final-text');

			hiddenText.textContent = currentText;
			hiddenText.style.display = "inline";
			currentInputField.style.display = "none";

		});
	};
}


addBlurListeners();




addTaskButton.addEventListener('click',(e) => {
	var newTask = document.createElement('div');
	newTask.className = 'task-item';
	newTask.innerHTML = "	<p class='task-title'>Another Task</p> \n \
								<input type='text-input'></input> \n  \
								<p class='final-text' style='display: inline;'></p> \n \
								<button type='submit' class='task-edit-button'>Edit</button> \n \
								<button type='submit' class='task-delete-button'>Delete</button>";


	taskSet.append(newTask);

	addBlurListeners();
	console.log("New task added!");
	console.log(newTask.innerHTML);

});



editButton.addEventListener('click',(e) => {
	var editButton = e.target;	//The edit task buttom
	var currentTextLabel = editButton.parentNode.querySelector('p.final-text'); 	//THe text label for our task's description
	console.log(currentTextLabel);

	if(currentTextLabel.style.display == "inline"){

		var inputField = editButton.parentNode.querySelector('input');				//The input field for editing the task's description

		inputField.value = currentTextLabel.textContent;
		currentTextLabel.style.display = "none";			//When edit button is clicked, task description label disappears
		inputField.style.display = "inline";				//At the same time, the input label for text editing appears

	}
});



taskSet.addEventListener("click", (e) => {
	if(e.target.className == 'task-delete-button'){
		var currentElement = e.target; 
		var taskItem = e.target.parentNode;
		var taskSet = taskItem.parentNode;
	 	console.log('A task-delete-button was clicked');
	 	taskSet.removeChild(taskItem);
	 }

	 if(e.target.className == 'task-edit-button'){
	 	var editButton = e.target;	//The edit task buttom
		var currentTextLabel = editButton.parentNode.querySelector('p.final-text'); 	//THe text label for our task's description

		if(currentTextLabel.style.display == "inline"){
			var inputField = editButton.parentNode.querySelector('input');				//The input field for editing the task's description

			inputField.value = currentTextLabel.textContent;
			currentTextLabel.style.display = "none";			//When edit button is clicked, task description label disappears
			inputField.style.display = "inline";
	 	}}	
	
}, true);