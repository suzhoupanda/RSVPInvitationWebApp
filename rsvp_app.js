
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
	ul.appendChild(li);
	input.value = '';
});

ul.addEventListener('change', (e) => {});