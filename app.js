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
function forWhite(){
    noteW.style.backgroundColor = '#181818'
    setTimeout(() => {
        noteW.style.backgroundColor = 'white'
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
        forWhite()
    }
});
var sound3 = new Audio('soundEffects/c3-95007.mp3')
noteE.addEventListener("click", 
function(){
    sound3.currentTime = 0
    sound3.play()
    sound3.volume = 0.5;
}
)
document.addEventListener("keydown",
function(event){

    if (event.keyCode == 69){
        sound3.currentTime = 0;
        sound3.play();
        sound3.volume = 0.1
        function forWhite2(){
            noteE.style.backgroundColor = '#181818'
            setTimeout(() => {
                noteE.style.backgroundColor = 'white'
            }, 150);
            
        }}
    }
)
var sound4 = new Audio('soundEffects/c6-102822.mp3')
noteR.addEventListener("click", 
function(){
    sound4.currentTime = 0
    sound4.play()
}
)
document.addEventListener("keydown",
function(event){

    if (event.keyCode == 82){
        sound4.currentTime = 0;
        sound4.play();
        sound4.volume = 0.7;
    }
    }
)

var sound5 = new Audio('soundEffects/e6-82016.mp3')
noteT.addEventListener("click", 
function(){
    sound5.currentTime = 0
    sound5.play()
}
)
document.addEventListener("keydown",
function(event){

    if (event.keyCode == 84){
        sound5.currentTime = 0;
        sound5.play();
        // sound5.volume = 0.7;
    }
    }
)
var sound6 = new Audio('soundEffects/f6-102819.mp3')
noteY.addEventListener("click", 
function(){
    sound6.currentTime = 0
    sound6.play()
}
)
document.addEventListener("keydown",
function(event){

    if (event.keyCode == 89){
        sound6.currentTime = 0;
        sound6.play();
        // sound5.volume = 0.7;
    }
    }
)
var sound7 = new Audio('soundEffects/g6-82013.mp3')
noteU.addEventListener("click", 
function(){
    sound7.currentTime = 0
    sound7.play()
}
)
document.addEventListener("keydown",
function(event){

    if (event.keyCode == 85){
        sound7.currentTime = 0;
        sound7.play();
        // sound5.volume = 0.7;
    }
    }
)

var sound8 = new Audio('soundEffects/la-80237.mp3')

noteI.addEventListener("click", 
function(){
    sound8.play()
    sound8.currentTime = 1
}
)
document.addEventListener('keydown',
function(event){
if (event.keyCode == 73){

        sound8.play()
        sound8.currentTime = 1
    }
    }
)

var sound9 = new Audio('soundEffects/mi-80239.mp3')

noteO.addEventListener('click', 
    function(){
        sound9.play()
        sound9.currentTime = 1
    }
)
document.addEventListener('keydown',
    function(event){
        if (event.keyCode == 79){
            sound9.play()
            sound9.currentTime = 1;
        }
    }
)

var sound10 = new Audio('soundEffects/piano-g-6200.mp3')

noteP.addEventListener('click',
    function(){
        sound10.play()
        sound10.currentTime = 0;
    }
)
document.addEventListener(
    'keydown',
    function(event){
        if (event.keyCode == 80){
            sound10.play()
            sound10.currentTime = 0
            sound10.volume = 0.25
        }
    }
)
