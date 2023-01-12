'use strict'; // strict syntax

let correctAnswer = 0;

console.log('Web app is running');

let playerName = prompt('Hello there, my name is Jason- what is your name?');
console.log(playerName);
function one() {
  if (playerName === null) {
    alert('Im not kidding, tell me your name!');
    playerName = prompt('No, seriously, please tell me who you are?');
  } else {
    alert('Ahh okay, hello ' + playerName + '! It is so great to meet you. Welcome to my guessing game!');
  }
}
one();

let manyQuestions = [
  'I have several questions for you. Please answer with \'Y\' or \'N\'. Firstly, do I enjoy traveling?',
  'Do I enjoy spending time relaxing on a sandy beach?',
  'Do you think that I drink too much coffee?',
  'Am I currently attending CodeFellows?',
  'Was I living in vietnam before starting CodeFellows?'
];

let answers = [
  'y',
  'y',
  'n',
  'y',
  'y',
];

function allQuestions() {
  for (let i = 0; i < manyQuestions.length; i++) {
    let playerResponse = prompt(manyQuestions[i]);

    if (typeof (playerResponse) === 'string') {
      playerResponse = playerResponse.toLowerCase();
    }
    if (playerResponse === answers[i]) {
      alert('Nice, you are correct!');
      correctAnswer++;
      console.log('Correct!');
    }
    if (playerResponse !== answers[i]) {
      alert('Nope, that is incorrect!');
      console.log('wrong!');
    }
  }
}
allQuestions();

function seven() {
  for (let i = 0; i < 4; i++) {
    let ageMe = parseInt(prompt('What age do you think I currently am?'));
    let age = 36;
    if (ageMe === age) {
      alert('Oh Wow! That was a really impressive guess! You got it right!');
      correctAnswer++;
      break;
    } else if (i < 36 && ageMe < age) {
      alert('That is close, but you need to go a bit higher.');
    } else if (i < 36 && ageMe > age) {
      alert('RUDE! I\'m not quite there yet, try a little lower.');
    } else if (i === 3) {
      alert('Ohh Sorry, but you have no more guesses, but for the record, I am 36 years old.');
    }
  }
}
seven();

let correct = false;
let countryList = [
  'Vietnam',
  'Thailand',
  'Laos',
  'Cambodia',
  'Malaysia',
  'Singapore',
  'South Korea',
  'Canada',
];

function eight() {
  for (let i = 0; i < 6; i++) {
    let playerResponse = prompt('I will give you 7 guesses to try and name one of the countries I have visited ');
    for (let j = 0; j < countryList.length; j++) {
      if (playerResponse.toLowerCase() === countryList[j].toLowerCase()) {
        alert(playerResponse + ' is correct! That was pretty cool that you guessed correctly!');
        correct = true;
        correctAnswer++;
        break;
      }
    }
    if (correct === false) alert('Oh sorry, guess again.');
    else break;
  }
  alert('The countries that I have visited are ' + countryList + '.');
  alert('Thank you for answering my questions ' + playerName + ', you did great! You got ' + correctAnswer + ' questions right! Welcome to my site!');

}
eight();

function displayScary() {

  let output = '';
  let scary = prompt('scale from 2-5, how scared are you now? *5 being very scared :D *');
  for (let a = 0; a < scary; a++) {
    output += "<img class='scary''/>";
  }

  return document.write(output);

}
displayScary();

