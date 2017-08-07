import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';




// Contact Form JS

// Using ES6 - Arrow Functions and const & let 

// Variables
const resetBtn = document.getElementById('resetButton');
const submitBtn = document.getElementById('sendButton');

const alertField = document.getElementById('alert-fields');

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const numberField = document.getElementById('number');
const textField = document.getElementById('textarea');


// Submit Button
submitBtn.addEventListener("click", () => {
  if (nameField.value === '') {
    nameField.style.border = '2px red solid';
    alertField.style.display = 'block';
  }

  if (emailField.value === '') {
    emailField.style.border = '2px red solid';
  }

  if (textField.value === '') {
    textField.style.border = '2px red solid';
  }
})

nameField.addEventListener("keydown", () => {
  nameField.style.border = '1px grey solid';
})

emailField.addEventListener("keydown", () => {
  emailField.style.border = '1px grey solid';
})

textField.addEventListener("keydown", () => {
  textField.style.border = '1px grey solid';
})

// Reset Button

resetBtn.addEventListener("click", () => {
  nameField.value = '';
  emailField.value = '';
  numberField.value = '';
  textField.value = '';
})












$(document).foundation();
