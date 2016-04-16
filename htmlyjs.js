

Events
<button onclick="displayDate()">The time is?</button>

Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

-----------


var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}

---------------

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


---------------


---------------
alert();
---------------
JSON

JSON stands for JavaScript Object Notation

{
"employees":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna",	"lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}




