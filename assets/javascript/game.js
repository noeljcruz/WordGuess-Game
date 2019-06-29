
// Array that contains every letter in the alphabet.

let WordBank = ["abandon", "adventure", "anchor", "ashore", "assault", "attack", "bandanna", "bandit", "barbaric", "barrel", "battle", "beach", "bounty", "brawl", "brutal", "cannon", "captain", "capture", "cargo", "cave", "challenge", "chest", "coast", "coins", "violent", "weapons", "compass", "confiscate", "conquest", "conquer", "contraband", "crew", "crook", "cruel", "curse", "cutthroat", "dagger", "danger", "deck", "desert", "island", "doubloon", "earring", "escape", "explore", "patch", "ferocious", "squabble", "flag", "fleet", "fortune", "gold", "greed", "gun", "gunpowder", "heist", "highseas", "hijack", "hook", "horizon", "hostile", "hurricane", "infamous", "island", "jewels", "kidnap", "land", "legend", "lookout", "loot", "map", "mates", "mayhem", "menace", "merchant", "mutiny", "navigate", "notorious", "ocean", "outcasts", "overboard", "parrot", "pegleg", "pirate", "pistol", "plank", "prowl", "quarters", "quest", "raid", "rat", "rations", "revenge", "riches", "roam", "robber", "rope", "ruthless", "sabotage", "sailing", "sailor", "scar", "scurvy", "seas", "seaweed", "ship", "shipmate", "shore", "silver", "thug", "tides", "torture", "trade", "treachery", "treasure", "truce", "skull", "bones", "steal", "swagger", "swashbuckling", "sword", "thief", "vandal", "vanquish", "vicious", "vile"];

// Initial variable declarations.

let Wins = 0;
let Losses = 0;
let GuessesLeft = 12;
let GuessesSoFar = "";
let winsText = $("#wins-text");
let lossesText = $("#losses-text");
let wordText = $("#word-text");
let leftText = $("#left-text");
let sofarText = $("#sofar-text");

// Starts off the game my having the Computer select a random letter from the Letters array.

let CompWord = WordBank[Math.floor(Math.random() * WordBank.length)];
console.log(CompWord);
let WordArray = Array.from(CompWord);
console.log(WordArray);

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
        CompLetter = Letters[Math.floor(Math.random() * WordBank.length)];
    }
    
    // If the user runs out of guesses, then a loss is added, the guesses left resets to 9, the guesses so far resets to blank, and the computer selects a new letter at random.
    
    if (GuessesLeft < 1) {
        Losses++;
        GuessesLeft = 9;
        GuessesSoFar = "";
        CompLetter = Letters[Math.floor(Math.random() * WordBank.length)];
    }
    
    // Displays the changes in the game with each key stroke.
    
    winsText.textContent = "Wins: " + Wins;
    lossesText.textContent = "Losses: " + Losses;
    wordText.textContent = "Word: " + WordArray;
    leftText.textContent = "Guesses Left: " + GuessesLeft;
    sofarText.textContent = "Your Guesses so far: " + GuessesSoFar;
    
} 