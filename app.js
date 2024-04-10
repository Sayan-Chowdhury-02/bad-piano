// Define variables for each button
var noteQ = document.getElementById('noteQ');
var noteW = document.getElementById('noteW');
var noteE = document.getElementById('noteE');
var noteR = document.getElementById('noteR');
var noteT = document.getElementById('noteT');
var noteY = document.getElementById('noteY');
var noteU = document.getElementById('noteU');
var noteI = document.getElementById('noteI');
var noteO = document.getElementById('noteO');
var noteP = document.getElementById('noteP');

var sound1 = new Audio('soundEffects/a6-102820.mp3'); // Create a new audio object
noteQ.addEventListener("click", function() {
    sound1.currentTime = 0; // Reset the audio to the beginning
    sound1.play(); // Play the audio
});
let flagBlack = 0
function forBlack(){
    noteQ.style.backgroundColor = '#c2c2c2'
    setTimeout(() => {
        noteQ.style.backgroundColor = 'black'
    }, 150);
}

// white
// Add event listener to the document for the "keydown" event
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is "Q" (key code 81)
    if (event.keyCode == 81) {
        sound1.currentTime = 0; // Reset the audio to the beginning
        sound1.play(); // Play the audio
        forBlack()
    }
});
// black
var sound2 = new Audio('soundEffects/b6-82017.mp3'); // Create a new audio object
noteW.addEventListener("click", function() {
    sound2.currentTime = 0; // Reset the audio to the beginning
    sound2.play(); // Play the audio
});

// Add event listener to the document for the "keydown" event
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 87) {
        sound2.currentTime = 0; // Reset the audio to the beginning
        sound2.play(); // Play the audio
    }
});