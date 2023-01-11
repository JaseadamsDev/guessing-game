'use strict'

greetVisitor();

function greetVisitor() {
  let name = prompt('What is your name?');
  if (name === '') {
    name = prompt('Im not kidding, tell me your name!');
  }
  alert('Howdy, ' + name + '!');
  // console.log('Howdy, ' + name + '!');
}

ageMe();


function ageMe() {
  let age = prompt('Am I 36 years old?');
  if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y' || age.toUpperCase() === 'Y' || age.toUpperCase() === 'YES') {
    alert('correct');
    // console.log('correct');
  } else {
    alert('WRONG!');
    // console.log('WRONG!');
  }
}

colorMe();


function colorMe() {
  let color = prompt('Do I like the color blue?');
  if (color.toLowerCase() === 'yes' || color.toLowerCase() === 'y' || color.toUpperCase() === 'Y' || color.toUpperCase() === 'YES') {
    alert('correct');
    // console.log('correct');
  } else {
    alert('WRONG!');
    // console.log('WRONG!');
  }
}

foodMe();

function foodMe() {
  let food = prompt('Do I like olives?');
  if (food.toLowerCase() === 'no' || food.toLowerCase() === 'n') {
    alert('Yup! You are correct.');
    // console.log('Yup! You are correct.');
  } else {
    alert('NOPE! Youre not paying attention...');
    // console.log('NOPE! Youre not paying attention...')
    
  }


}

countryMe();

function countryMe() {
  let country = prompt('Am I from the USA?');
  if (country.toLowerCase() == "yes" || country.toLowerCase() == "y") {
    alert('Youre good at this!');
    // console.log('Youre good at this!');
  } else {
    alert('Lame...NO!');
    // console.log('Lame...NO!');
  }
}

stateMe();

function stateMe() {
  let state = prompt('Am I from the WA state?');
  if (state.toLowerCase() == 'yes' || state.toLowerCase() == 'y') {
    alert('Youre good at this!');
    // console.log('Youre good at this!');
  } else {
    alert('Lame...NO!');
    // console.log('Lame...NO!');
  }
}

displayScary();

function displayScary() {

  let output = '';
  let scary = prompt('scale from 2-5, how scared are you now? *5 being very scared :D *');
  for (let i = 0; i < scary; i++) {
    output += "<img class='scary' src='saw.png'/>";
  }

  return document.write(output);
}



