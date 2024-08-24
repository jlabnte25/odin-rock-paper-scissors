
var hScore = 0;
var cScore = 0;


for (let i = 0; i < 5; i++) {
    //Get input of human through prompt
        getHumanChoice = () => prompt ("Rock, Paper, or Scissors?", "");

        var humanChoice = getHumanChoice();

    //Make it case insensitive 
        convertToLowerCase = () => {
            var convertedChoice = humanChoice.toLocaleLowerCase();
            return convertedChoice;
        }

        var convertedChoice = convertToLowerCase () 

    //Validate input, subtract failed input from counter, and ask for a new one
        if 
            (convertedChoice === 'rock' || convertedChoice === 'paper' || convertedChoice === 'scissors'){
            convertChoiceToInt ();
        } else {
            alert ("Please input a valid choice");
            i--;
            humanChoice = getHumanChoice();
            convertedChoice = convertToLowerCase(humanChoice);
            convertedChoiceToInt = convertChoiceToInt (convertedChoice);
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
         getRandomNumber = () => {
             return Math.floor(Math.random()*3) +1;
        }

        var computerChoice = getRandomNumber();

    // Convert computer input to string
        convertChoiceToString = (computerChoice)=> {
            if (computerChoice === 1) {
                return 'rock';
            } else if (computerChoice === 2) {
                return 'paper';
            } else if (computerChoice === 3) {
                return 'scissors';
            }
        }

        var convertedChoiceToString = convertChoiceToString (computerChoice);

    // Evaluate round winner and tally score
        var cumulativeChoice = (convertedChoiceToInt + computerChoice);

        playGame = () => {
            if(
                (cumulativeChoice === 3 && (convertedChoiceToInt < computerChoice))
                || (cumulativeChoice === 5 && (convertedChoiceToInt < computerChoice))
                || (cumulativeChoice === 4 && (convertedChoiceToInt > computerChoice))
            ) {
                cScore++;
                alert ("You lose!" + " " + convertedChoiceToString.charAt(0).toUpperCase() + convertedChoiceToString.slice(1)+ " " + "beats" + " " + convertedChoice + "!");
            } else if 
                (convertedChoiceToInt === computerChoice){ 
                alert ("It's a tie, nobody gets a point.")
            } else { 
                hScore++;
                alert("You win!" + " " + convertedChoice.charAt(0).toUpperCase() + convertedChoice.slice(1) + " " + "beats" + " " + convertedChoiceToString+ "!");
            } 
        }

        playGame ();
}

//Announce overall winner
    if (hScore > cScore) {
        alert("Congrats, you win! User: " + hScore + " Computer: " + cScore);
    } else if (cScore > hScore) {
        alert("You lose! User: " + hScore + " Computer: " + cScore);
    } else {
        alert("It's a tie overall! User: " + hScore + " Computer: " + cScore);
    }