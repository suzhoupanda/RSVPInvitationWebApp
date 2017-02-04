document.addEventListener('DOMContentLoaded', () => { 

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

filterCheckBox.addEventListener('change',(e) => {
	const isChecked = e.target.checked;
	const lis = ul.children;

	if(isChecked){
		for(let i = 0; i < lis.length; i+= 1){
			let li = lis[i];
			if(li.className === 'responded'){
				li.style.display = '';
			} else {
				li.style.display = 'none';
			}
		}
	} else {
		for(let i = 0; i < lis.length; i+= 1){
			let li = lis[i];
			li.style.display = '';

		}

	}

});

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
	function createElement(elementName,property,value) {
		const element = document.createElement(elementName);
		element[property] = value;
		return element;
	}

	function appendToElement(array,element = li){
		for(let i = 0; i < array.length; i++){
			element.appendChild(array[i]);
		}
	}

	const li = document.createElement('li');

	const span = createElement('span','textContent',inputFieldText);
	const label = createElement('label','textContent','Confirmed');
	const checkbox = createElement('input','type','checkbox');
	const editButton = createElement('button','textContent','edit');
	const removeButton = createElement('button','textContent','remove');

	appendToElement([checkbox],label);
	appendToElement([span,label,editButton,removeButton]);

	input.value = '';

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


});