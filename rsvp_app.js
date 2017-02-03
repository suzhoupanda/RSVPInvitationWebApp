
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener('submit',(e) => {
	event.preventDefault();
	const text = input.value;
	const li = document.createElement('li');
	li.textContent = text;

	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);

	const button = document.createElement('button');
	button.textContent = 'Remove';
	li.appendChild(button);

	ul.appendChild(li);
	input.value = '';
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
		ul.removeChild(listItem);
	}
});