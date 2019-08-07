/* eslint-disable no-unused-vars */
'use strict';

var greet = function() {
  var name = prompt('Welcome! What\'s your name?');
  if (name) {window.alert('Welcome, ' + name);}
  else { window.alert('Wait, I didn\'t catch that. Let\'s try again.');
    greet();}
  console.log('greet ran');
};

//FIXME:uncomment for debug
// window.onload = greet();

var guess = function() {

  console.log('guess fired');

  //3 arrays - tf questions - number questions - multi choice questions
  //multidimensional arrays are ugly, but maybe that's still the right tool for the job
  //start by writing the functions to do the  high low and multi-choice bits first

  var questions = ['I used to be a mime','There\'s a piece of plastic lodged in my knuckle from when I was a kid and crashed a big wheel','I grew up calling all soda \'pop\'','I can eat fifty eggs','My brother runs a vineyard in the finger lakes.' ];
  var tfAnswers = ['T','F','T','F','F'];
  var numAnswers = 37;
  var countryAnswers = ['ireland','england','germany','france','switzerland','costa rica','panama','austraila','peru','mexico','canada'];

  window.confirm('I\'m going to ask you some questions about me. See if you can guess the answers.');
  console.log('guess finished');

  var score = 0;

  //T/F questions: loop through questions, ask each, scrub user input and compare the value there to the answers array.

  //FIXME: set this i back to 4 so the questions run after debugging
  for (var i=0; i < 0; i++) {
    var answer = window.prompt('True or false: ' +questions[i]);
    var cleanAnswer = answer.charAt(0).toUpperCase();
    console.log(cleanAnswer);
    if (cleanAnswer === tfAnswers[i]) {
      window.confirm('Correct!');
      score++;}
    else {
      window.confirm('NOPE.');
    }
  }

  // number guessing game - start with 6 guesses, ffs use parseint to see if there's a number and if not throw an error
  var guesses = 6;
  while (guesses > 0) {
    answer = parseInt(window.prompt('Can you guess how freaking ancient I am? You have ' + guesses +' guesses left'));
    if (answer === 37) {
      window.confirm('YUP. WTH RIGHT?');
      guesses = 0;
      score ++;
    } else if (answer < 37) {
      window.confirm('OLDER. Try again. You have ' + guesses +' guesses left');
      guesses --;
      console.log(answer);
    } else if (answer > 37) {
      window.confirm('Okay not *that* old ffs. Try again. You have ' + guesses +' guesses left');
      guesses --;
      console.log(answer);
    } else {
      window.confirm('I\'m not sure that\'s even a number bruh.');
      guesses--;}
    console.log(answer);
  }
};

//FIXME: uncomment this to run again
//window.confirm('Not bad! You got '+ score + ' out of 7 correct.');

document.getElementById('guess-button').onclick = function() {
  guess();
  console.log('guess firing');
}
;
