// Creates an array that lists out all of the options
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pokemon;            // Pokemon choices
var chosenPokemon;     // Selected Pokemon
var word ;             // Selected word
var guess ;            // Guess 
var guesses = [ ];     // Stored guesses
var lives ;            // Lives
var counter ;          // Count correct guesses
var space;             // Number of spaces in word '-'
var hint;
var hints;
var list;
var wordHolder;
var correct;
var userGuess;
var play;
var context;
var guessArrays = [];

// Creating variables to hold the number of wins and losses
var wins = 0;
var losses = 0;


window.onload = function() {

// Alphabet List
var buttons = function () {
    buttons = document.getElementById('buttons');
    alphabet = document.createElement('ul');

for (var i = 0; i < alphabet.length; i++) {
    alphabet.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    buttons.appendChild(alphabet);
    alphabet.appendChild(list);
    }
};

// Get Element By ID

var showLives = document.getElementById("mylives");
var showClue = document.getElementById("clue");

// Create Guesses
var result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.getElementById('ul');
    
    for (var i=0; i < word.length; i++) { 
    guessArrays.push("-");
    }
    console.log(guessArrays)
    // wordHolder.appendChild(correct);
    document.querySelector("#holder").innerHTML = guessArrays; // Fix to js
    // correct.appendChild(guess); // Fix to js
};

// Lives
var comments = function () {
    if (lives < 1) {
        showLives.innerHTML = "Game Over!";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            showLives.innerHTML = "You Win!";
        }
    }
};


// OnClick
 var check = function () {
    list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
            } 
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            comments();
        } else {
            comments();
        }

        // Hints!

    hint.onclick = function() {
        hints = [
            "Loyal Electric Mouse", "Edward Scissorhands, but bug version", "Dangerous Noodle", "Abra, Kadabra, ...",
            "Vapor Ball", "Splash!", "Beady-Eye Copycat", "Pokemon with Most Evolution Possibilites", 
            "Hungry/Sleepy, the answer is not 'Yourself'","Not MewOne but...", "Lullaby Master",
            "This Pokemon's evolutions change based off it's gender", "Obviously the best starter", 
            "Obviously the worst starter", "SQUAD!"
        ];

        var pokemonIndex = pokemon.indexOf(chosenPokemon);
        var hintIndex = chosenPokemon.indexOf(word);
        showClue.innerHTML = "Clue: -" + hints [pokemonIndex][hintIndex];
        };
    };
};

// Pokemon Names To Guess
play = function () {
    pokemon = [
        "pikachu", "scyther", "arbok", "alakazam", "gastly", "magikarp", "ditto", "eevee",
        "snorlax", "mewtwo", "jigglypuff", "nidoran", "charmander", "bulbasaur", "squirtle"
    ];

    word = pokemon[Math.floor(Math.random() * pokemon.length)];
    console.log(word);
    // buttons();

    guesses = [ ];
    result();
    lives = 10;
    counter = 0;
    space = 0;
    comments();

    var html =  
        "<p>something: " + userGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>";

// Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
        guesses.push(userGuess);
        document.querySelector("#userGuess").innerHTML = guesses;
    };

document.getElementById('reset').onclick = function() {
    $("#buttons, #pokeName, #holder, #myLives, #clue, #userGuess").empty();
    guesses = []
    guessArrays = []
    play(); 
  };
};