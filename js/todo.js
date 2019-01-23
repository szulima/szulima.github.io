var input = document.getElementById("userinput");
var enter = document.getElementById("enter");
var ul = document.querySelector("ul");

function createListElement() {
	var li = document.createElement("li");

	var btn = document.createElement("button");
	var remove = document.createTextNode("delete");
	btn.appendChild(remove);

	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(btn);
	ul.appendChild(li);

	input.value = "";
}

enter.addEventListener("click", function() {
	if (input.value.length > 0)
		createListElement();
})

input.addEventListener("keypress", function(e) {
	if (input.value.length > 0 && e.keyCode == 13)
		createListElement();
})

ul.addEventListener("click", function(e) {
	if (e.target.tagName != "BUTTON")
		e.target.classList.toggle("done");
})

ul.addEventListener("click", function(e) {
	if (e.target.tagName == "BUTTON") {
		e.target.parentElement.remove();
	}
})



// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 