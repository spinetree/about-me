'use strict';

var greet = function() {
  var name = prompt('Welcome! What\'s your name?');
  if (name) {window.alert('Welcome, ' + name.toUpperCase());}
  else { window.alert('Wait, I didn\'t catch that. Let\'s try again.');
    greet();}
};
  // TODO: change this to change the guest html text and is this recursive-loop problematic?

window.onload = greet();

var guess = function() {
  console.log('guess firing');
};

//TODO: research says onClick best to use now, accurate?
document.getElementById('guess-button').onclick = function() {guess();}
;