
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');



var createListItem = function(inputFieldText){
	const li = document.createElement('li');
	input.value = '';
	li.textContent = inputFieldText;
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
		const button = e.target;
		const listItem = e.target.parentNode;
		if(button.textContent === 'remove'){
			
			ul.removeChild(listItem);
			} else if (button.textContent === 'edit'){
				console.log('edit');
			}
	}
});