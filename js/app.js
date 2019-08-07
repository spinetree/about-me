'use strict';

var greet = function() {
  var name = prompt('Welcome! What\'s your name?');
  if (name) {window.alert('Welcome, ' + name);}
  else { window.alert('Wait, I didn\'t catch that. Let\'s try again.');
    greet();}
  console.log('greet ran');

};
// TODO: update this to change the guest html text below page header, and is this recursive-loop problematic?

window.onload = greet();

var guess = function() {

  console.log('guess fired');

  var questions = ['I used to be a mime','There\'s a piece of plastic lodged in my knuckle from when I was a kid and crashed a big wheel','I grew up calling all soda \'pop\'','I can eat fifty eggs','My brother runs a vineyard in the finger lakes.' ];
  var answers = ['T','F','T','F','F'];

  window.confirm('I\'m going to ask you some true/false questions about me. See if you can guess the answers.');
  console.log('guess finished');

  var score = 0;
  
  //loop through questions, ask each, scrub user input and compare the value there to the answers array.
  for (var i=0; i < questions.length; i++) {
    var answer = window.prompt('True or false: ' +questions[i]);
    var cleanAnswer = answer.charAt(0).toUpperCase();
    console.log(cleanAnswer);
    if (cleanAnswer === answers[i]) {
      window.confirm('Correct!');
      score++;}
    else {
      window.confirm('NOPE.');
    }
  };
  window.confirm('Not bad! You got '+ score + ' out of 5 correct.');
};

//TODO: research says onClick best to use now, accurate?
document.getElementById('guess-button').onclick = function() {
  guess();
  console.log('guess firing');
}
;
