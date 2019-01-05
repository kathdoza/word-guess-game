//variables
var ariSongs = ["thankunext", "breathin", "godisawoman", "notearslefttocry", "sidetoside", "intoyou", "focus"];
var wins = 0;
var losses = 0; 
var amountGuesses = 10; //total amount of tries they have per turn
var guessesLeft = 0; //how many tries the user has left
var userGuess = []; //the letters the user guesses
var computerChoice; //number the computer chooses for the song
var currentSong = []; //song theyre guessing

//display the starting numbers

document.getElementById("userWins").innerHTML = wins;
document.getElementById("userLosses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = amountGuesses;

computerChoice = Math.floor(Math.random() * (ariSongs.length));
console.log(ariSongs[computerChoice]);
//functions


//what we see when we start the game/page
function startGame (){
    guessesLeft = amountGuesses;
    
   if (ariSongs[computerChoice] == ariSongs[0]) {
    $(".clue").html("<img src='assets/images/thank-u.png' width='400'/>");
   }
   else if (ariSongs[computerChoice] == ariSongs[1]) {
    $(".clue").html("<img src='assets/images/breathin.jpg' width='400'/>");
   }
   else if (ariSongs[computerChoice] == ariSongs[2]) {
    $(".clue").html("<img src='assets/images/god-woman.jpg' width='400'/>");
   }
   else if (ariSongs[computerChoice] == ariSongs[3]) {
    $(".clue").html("<img src='assets/images/no-tears.jpg' width='400'/>");
   }
   else if (ariSongs[computerChoice] == ariSongs[4]) {
    $(".clue").html("<img src='assets/images/side.jpg' width='400'/>");
   }
   else if (ariSongs[computerChoice] == ariSongs[5]) {
    $(".clue").html("<img src='assets/images/into-you.png' width='400'/>");
   }
   else if (ariSongs[computerChoice] == ariSongs[6]) {
    $(".clue").html("<img src='assets/images/focus.jpg' width='400'/>");
   }
   

    for (var i = 0; i < ariSongs[computerChoice].length; i++) {
        currentSong.push("_"); 
        currentSong.toString;
        document.getElementById("currentSong").innerHTML = currentSong.join(" ");
    }

    console.log(currentSong);
};


//function to get userguess and compare
document.onkeyup = function (event) {
   var userGuess = event.key;
   console.log(userGuess);

   if (ariSongs[computerChoice].indexOf(userGuess) > -1) {
       console.log("correct");

   }
   else if (ariSongs[computerChoice].indexOf(userGuess) <= -1){
       console.log("wrong");
       
       
   };
};




//console.logs
console.log(ariSongs);
console.log(computerChoice);
