//what to track
//a list of words
//the current word to guess
//track the wrong guess
//track the key the user presses



//what to do
//TODO: choose a word
//TODO: restart the game
//TODO: check if the key pressed is in the word
//TODO: check if user won
//TODO: check if user lost
//TODO: display the wins
//TODO: display the losses
//TODO: display the wrong guesses
//TODO: display the current word
//TODO: display the guessed remaining

var wins = 0;
var losses = 0;

//TODO: use key events to listen for letters that players type
document.onkeyup = function(event) {
    // console.log(event.keyCode)
    // console.log(event.key);
    if (event.keyCode >= 65 && event.keyCode <= 90){
        console.log(event.key)
    }
}