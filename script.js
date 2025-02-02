//your JS code here. If required.
// Select the element with id "level"
let element = document.getElementById("level");

// Initialize level count
let level = 0;

// Traverse up the DOM tree to count the levels
while (element) {
    level++;
    element = element.parentElement;
}

// Display the result
alert("The level of the element is: " + level);
