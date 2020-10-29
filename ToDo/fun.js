function todoList() {
	var item    = document.getElementById('todoInputItem').value
	var text    = document.createTextNode(item)
	var newItem = document.createElement('li')
	newItem.appendChild(text)
	document.getElementById('todoList').appendChild(newItem)
}
