
const form = document.getElementById('registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't yet responded";
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);

// const checkbox_span = document.getElementById('response-span');
// const checkbox_input = checkbox_span.querySelector('input');

// checkbox_input.addEventListener('change', (e) => {
// 	if(e.target.tagName == 'INPUT'){
// 		if(checkbox_input.value == 'on'){
// 			console.log("Hide the non-respondents");
// 			const listItems = document.getElementById('invitedList').children;
// 			console.log(listItems.length);
// 			for(var i = 0; i < listItems.length; i++){
// 				var currentListItem = listItems[i];
// 				var currentCheckbox = currentListItem.querySelector('input');
// 				console.log(currentCheckbox.value);
// 				if(currentCheckbox.value == 'on'){
// 					var li = currentCheckbox.parentNode.parentNode; 
// 					li.style.display = 'none';
// 				}
// 			}
// 		}
// 	}
// });


var createListItem = function(inputFieldText){
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = inputFieldText;
	input.value = '';
	li.appendChild(span);

	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);

	const editButton = document.createElement('button');
	editButton.textContent = 'edit';
	li.appendChild(editButton);

	const removeButton = document.createElement('button');
	removeButton.textContent = 'remove';
	li.appendChild(removeButton);

	return li;
}

form.addEventListener('submit',(e) => {
	event.preventDefault();
	const text = input.value;
	const li = createListItem(text);
	ul.appendChild(li);
});



ul.addEventListener('change', (e) => {
	const checkbox = event.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;

	if(checked){
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}

});

ul.addEventListener('click', (e) => {
	if(e.target.tagName === 'BUTTON'){
		const button = e.target;
		const listItem = e.target.parentNode;
		if(button.textContent === 'remove'){
			
			ul.removeChild(listItem);
			} else if (button.textContent === 'edit'){
				const span = listItem.firstChild;
				const input = document.createElement('input');
				input.type = 'text';
				input.value = span.textContent;
				listItem.insertBefore(input,span);
				listItem.removeChild(span);
				button.textContent = 'save';
			} else if (button.textContent == 'save'){
				const input = listItem.firstChild;
				const span = document.createElement('span');
				span.textContent = input.value;
				listItem.insertBefore(span,input);
				listItem.removeChild(input);
				button.textContent = 'edit';
			}
	}
});