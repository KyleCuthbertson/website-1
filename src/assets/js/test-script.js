// Buttons
var sendBtn = document.getElementById('sendButton');
var resetBtn = document.getElementById('resetButton');

// Input Field Variables
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var phoneField = document.getElementById('number');
var textField = document.getElementById('textarea');


sendBtn.addEventListener("click", function() {
  if (nameField.value.length > 3 && nameField.value.length < 11) {
    alert('Thank you');
  } else {
    alert('Please enter more than 3 and less than 11 characters');
  }
})



resetBtn.addEventListener("click", function() {
  nameField.value = "";
  emailField.value = "";
  textField.value = "";
})

nameField.addEventListener("focus", function() {
  nameField.style.background = "#006081";
  nameField.style.color = "#FFFFFF";
  nameField.style.transition = "0.5s";
})

nameField.addEventListener("blur", function() {
  nameField.style.background = "#FFFFFF";
  nameField.style.color = "#000000";
})


// Attribute JavaScript
var myVar = document.getElementById("responsive-menu");
if (myVar.hasAttribute('class')) {
console.log(myVar.getAttribute('class'));
//myVar.removeAttribute('class');
}

var exampleVar = document.getElementById("example-1");
var exampleBtn = document.getElementById("example-btn");

exampleBtn.addEventListener("click", function() {
if(exampleVar.hasAttribute('class')) {
  exampleVar.removeAttribute('class');
  exampleVar.setAttribute('class', 'hot');
}
})




// Function Expression using Arrow
const sayHello = () => {
console.log('hello there friend');
}

sayHello();
