
// Array that contains every letter in the alphabet.

let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Initial variable declarations.

let Wins = 0;
let Losses = 0;
let GuessesLeft = 9;
let GuessesSoFar = "";
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let leftText = document.getElementById("left-text");
let sofarText = document.getElementById("sofar-text");

// Starts off the game my having the Computer select a random letter from the Letters array.

let CompLetter = Letters[Math.floor(Math.random() * Letters.length)];

document.onkeyup = function (event) {
    
    // Upon pressing a key, the following happens: That key is logged as the user's guess, the number of guesses left is reduced by one, and the guess is added to the list of guesses so far.
    
    let UserGuess = event.key;
    GuessesLeft--;
    GuessesSoFar = GuessesSoFar + UserGuess;
    
    
    // If the user's guess matches the computer's letter, then a win is added, the guesses left resets to 9, the guesses so far resets to blank, and the computer selects a new letter at random.
    
    if (UserGuess === CompLetter) {
        Wins++;
        GuessesLeft = 9;
        GuessesSoFar = "";
        CompLetter = Letters[Math.floor(Math.random() * Letters.length)];
    }
    
    // If the user runs out of guesses, then a loss is added, the guesses left resets to 9, the guesses so far resets to blank, and the computer selects a new letter at random.
    
    if (GuessesLeft < 1) {
        Losses++;
        GuessesLeft = 9;
        GuessesSoFar = "";
        CompLetter = Letters[Math.floor(Math.random() * Letters.length)];
    }
    
    // Displays the changes in the game with each key stroke.
    
    winsText.textContent = "Wins: " + Wins;
    lossesText.textContent = "Losses: " + Losses;
    leftText.textContent = "Guesses Left: " + GuessesLeft;
    sofarText.textContent = "Your Guesses so far: " + GuessesSoFar;
    
} 