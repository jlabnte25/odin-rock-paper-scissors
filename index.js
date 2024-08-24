
var hScore = 0;
var cScore = 0;

for (let i = 0; i < 5; i++) {
//Get input of human through prompt
function getHumanChoice () {
    let choice = prompt ("Rock, Paper, or Scissors?","");
    return choice;
};

var humanChoice = getHumanChoice();


//Make it case insensitive 
function convertToLowerCase () {
    var convertedChoice = humanChoice.toLocaleLowerCase();
    return convertedChoice;
}

//Turn function into variable
var convertedChoice = convertToLowerCase () 


//Make sure what they input is valid
if 
    (convertedChoice === 'rock' || convertedChoice === 'paper' || convertedChoice === 'scissors')
    {convertChoiceToInt ();
} else {
    alert ("Please input a valid choice");
    i--;
    humanChoice = getHumanChoice();
    convertedChoice = convertToLowerCase(humanChoice);
};

//Convert user input to integers
function convertChoiceToInt (convertedChoice) {
    if (convertedChoice === 'rock') {
        return 1;
    } else if (convertedChoice === 'paper') {
        return 2;
    } else if (convertedChoice === 'scissors') {
        return 3;
    }
}

var convertedChoiceToInt = convertChoiceToInt (convertedChoice);


// Get input from computer
function getRandomNumber () {
    return Math.floor(Math.random()*3) +1;
}

var computerChoice = getRandomNumber();

// Convert computer input to string
function convertChoiceToString(computerChoice)  {
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else if (computerChoice === 3) {
        return 'scissors';
    }
}

var convertedChoiceToString = convertChoiceToString (computerChoice);

// Evaluate Winner
var cumulativeChoice = (convertedChoiceToInt + computerChoice);


function playGame () {
if(
    (cumulativeChoice === 3 && (convertedChoiceToInt < computerChoice))
    || (cumulativeChoice === 5 && (convertedChoiceToInt < computerChoice))
    || (cumulativeChoice === 4 && (convertedChoiceToInt > computerChoice))
    ) {
    cScore++;
    alert ("You lose!" + " " + convertedChoiceToString + " " + "beats" + " " + convertedChoice + "!");
    }
    else if (convertedChoiceToInt === computerChoice) 
    { 
    alert ("It's a tie, nobody gets a point.")
    } else 
    { 
    hScore++;
    alert("You win!" + " " + convertedChoice + " " + "beats" + " " + convertedChoiceToString+ "!");
    }
}

playGame ();
}

if (hScore > cScore) {
    alert("Congrats, you win! User: " + hScore + " Computer: " + cScore);
} else if (cScore > hScore) {
    alert("You lose! User: " + hScore + " Computer: " + cScore);
} else {
    alert("It's a tie overall! User: " + hScore + " Computer: " + cScore);
}