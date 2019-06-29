
// Array that contains every letter in the alphabet.

let WordBank = ["abandon", "adventure", "anchor", "ashore", "assault", "attack", "bandanna", "bandit", "barbaric", "barrel", "battle", "beach", "bounty", "brawl", "brutal", "cannon", "captain", "capture", "cargo", "cave", "challenge", "chest", "coast", "coins", "violent", "weapons", "compass", "confiscate", "conquest", "conquer", "contraband", "crew", "crook", "cruel", "curse", "cutthroat", "dagger", "danger", "deck", "desert", "island", "doubloon", "earring", "escape", "explore", "patch", "ferocious", "squabble", "flag", "fleet", "fortune", "gold", "greed", "gun", "gunpowder", "heist", "highseas", "hijack", "hook", "horizon", "hostile", "hurricane", "infamous", "island", "jewels", "kidnap", "land", "legend", "lookout", "loot", "map", "mates", "mayhem", "menace", "merchant", "mutiny", "navigate", "notorious", "ocean", "outcasts", "overboard", "parrot", "pegleg", "pirate", "pistol", "plank", "prowl", "quarters", "quest", "raid", "rat", "rations", "revenge", "riches", "roam", "robber", "rope", "ruthless", "sabotage", "sailing", "sailor", "scar", "scurvy", "seas", "seaweed", "ship", "shipmate", "shore", "silver", "thug", "tides", "torture", "trade", "treachery", "treasure", "truce", "skull", "bones", "steal", "swagger", "swashbuckling", "sword", "thief", "vandal", "vanquish", "vicious", "vile"];

// Initial variable declarations.

let Wins = 0;
let Losses = 0;
let Word;
let Blanks;
let GuessesLeft;
let GuessesSoFar;
let CompWord;
let WordArray;
let BlankArray;

// Starts off the game with a function that has the Computer select a random word from the WordBank array. Then it takes that word and creates a new array for it, with each character as an array item. After there is a for loop that will create underscore spaces for the length of the word chosen, and display them in the Word variable.

function DefaultVars() {
    Word = "";
    Blanks = "";
    GuessesLeft = 12;
    GuessesSoFar = "";
    BlankArray = [];
}

function NewWord() {

    CompWord = WordBank[Math.floor(Math.random() * WordBank.length)];

    WordArray = Array.from(CompWord);

    for (let i = 0; i < WordArray.length; i++) {
        Word = Word + WordArray[i];
        Blanks = Blanks + "_ ";
        BlankArray[i] = "_ ";
    }

}

DefaultVars();
NewWord();
console.log(CompWord);
console.log(Word);
console.log(Blanks);
console.log(BlankArray);

document.onkeyup = function (event) {

    // Upon pressing a key, the following happens: That key is logged as the user's guess, the number of guesses left is reduced by one, and the guess is added to the list of guesses so far.

    let UserGuess = event.key;
    GuessesLeft--;
    GuessesSoFar = GuessesSoFar + UserGuess;

    //
    
    
    
    //

    if (BlankArray === WordArray) {
        Wins++;
        DefaultVars();
        NewWord();
    }

    //

    if (GuessesLeft < 1) {
        Losses++;
        DefaultVars();
        NewWord();
        console.log(CompWord);
        console.log(Word);
        console.log(Blanks);
        console.log(BlankArray);
    }

    // Displays the changes in the game with each key stroke.

    $("#wins-text").text("Wins: " + Wins);
    $("#losses-text").text("Losses: " + Losses);
    $("#word-text").text("Word: " + BlankArray);
    $("#left-text").text("Guesses Left: " + GuessesLeft);
    $("#sofar-text").text("Your Guesses so far: " + GuessesSoFar);

} 