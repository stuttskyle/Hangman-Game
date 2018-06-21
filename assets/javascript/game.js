window.onload = function() {

// Creates an array that lists out all of the options
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pokemon            // Pokemon choices
var chosenPokemon;     // Selected Pokemon
var getHint ;          // Word getHint
var word ;             // Selected word
var guess ;            // Guess 
var guesses = [ ];     // Stored guesses
var lives ;            // Lives
var counter ;          // Count correct guesses
var space;             // Number of spaces in word '-

// Get Element By ID

var showLives = document.getElementById("mylives");
var showPokemon = document.getElementById("pokemon");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

// Alphabet List
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
    }
}

// Create Guesses
var outcome = function () {
    wordHolder = document.getElementById('hold');
    correct = document.getElementById('ul');
    
    for (var i=0; i < word.length; i++) {
        correct.setAttr('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttr('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space += 1;
        } else {
            guess.innerHTML = "_";
        }
    
    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
    }
}

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
}

// Creating variables to hold the number of wins and losses
var wins = 0;
var losses = 0;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
    var userGuess = event.key;

// Set the inner HTML contents of the #game div to our html string
 document.querySelector("#game").innerHTML = userGuess;
}

// OnClick
 var check = function () {
    list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === geuss) {
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
    }
}

// Pokemon Names To Guess
play = function () {
    pokemon = [
        "pikachu", "scyther", "arbok", "alakazam", "gastly", "magikarp", "ditto", "eevee",
        "snorlax", "mewtwo", "jigglypuff", "nidoran", "charmander", "bulbasaur", "squirtle"
    ];

    chosenPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    word = chosenPokemon[Math.floor(Math.random() * pokemon.length)];
    word = word.replace("\\s", "-");
    console.log(word);
    buttons();

    guesses = [ ];
    result();
    lives = 10;
    counter = 0;
    space = 0;
    comments();
    selectCat();
    canvas();
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
}


// Reset

document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
}
}