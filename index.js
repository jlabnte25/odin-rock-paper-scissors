
// Get computer input
let getComputerInput = () => {
    let randomNumber = Math.floor(Math.random()*3) +1; 
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else (randomNumber == 3) 
        return "scissors";
}

// Game mechanics 
// 1. Declare variables outside game function
// 2. Update 'round' everytime playRound is called
// 3. Update 'computer score' and 'user score', while announcing round winner
// 4. Create a condition that resets the game scores and alerts overall winner


let userInput = "";
let userScore = 0;
let computerScore = 0; 
let round = 0;

function playRound (userInput) { 
    
    ++round;
    let computerInput = getComputerInput();
    
    console.log (computerInput);
    console.log (userInput);
    console.log(computerScore);
    console.log(userScore);
    console.log(round);

    if (round < 5){    
        if (userInput === computerInput) {
            gameNotification.textContent = ("It's a tie! No points for both of you.");
        } else if (
            (userInput === "rock" && computerInput === "paper") ||
            (userInput === "paper" && computerInput === "rock") ||
            (userInput === "scissors" && computerInput === "rock")
        ) {
            computerScore++;
            gameNotification.textContent = (`Computer wins this round, ${computerInput} beats ${userInput}.`);
        } else if (
            (userInput === "rock" && computerInput === "scissors") ||
            (userInput === "paper" && computerInput === "scissors") ||
            (userInput === "scissors" && computerInput === "paper")
        ) {
            userScore++;
            gameNotification.textContent = (`You win this round. ${userInput} beats ${computerInput}.`);
        }
    }    

    userScoreContainer.textContent = userScore;
    computerScoreContainer.textContent = computerScore;

    if (round === 5) 
       {function getGameWinner(){
            if (userScore > computerScore) {
                gameNotification.textContent = "You won the game congratulations!";
            } else if (computerScore > userScore) {
                gameNotification.textContent = "You lost the game, try again";
            } else {
                gameNotification.textContent = "It's a tie, nobody wins the game."
            }
        
        }  getGameWinner();
    }
}

// Allow user to restart the game at anytime
function restartGame() {
    userInput = "";
    userScore = 0;
    computerScore = 0;
    round = 0;
    gameNotification.textContent = "";
    userScoreContainer.textContent = userScore;
    computerScoreContainer.textContent = computerScore;
    userCharacterImage.src = "./Elements/Characters/2.png";
    computerCharacterImage.src = "./Elements/Characters/1.png";
}


//Event listeners
const btnRock = document.querySelector ("#rock");
const btnPaper = document.querySelector ("#paper");
const btnScissors = document.querySelector ("#scissors");
const btnRestart = document.querySelector ("#restart");


btnRock.addEventListener ("click", () => {userInput = "rock"; 
    playRound(userInput)
    changeUserCharacterImage(userScore)
    changeComputerCharacterImage(computerScore)});
btnPaper.addEventListener ("click", () => {userInput = "paper";
    playRound(userInput)
    changeUserCharacterImage(userScore)
    changeComputerCharacterImage(computerScore)});
btnScissors.addEventListener ("click", () => {userInput = "scissors";
    playRound(userInput)
    changeUserCharacterImage(userScore)
    changeComputerCharacterImage(computerScore)})
btnRestart.addEventListener ("click", restartGame);


const userScoreContainer = document.querySelector("#userScore");
const computerScoreContainer = document.querySelector("#computerScore");
const gameNotification = document.querySelector("#gameNotification");

// Display initial score 
userScoreContainer.textContent = userScore;
computerScoreContainer.textContent = computerScore;

// Display change in character
const userCharacter = document.querySelector("#userCharacterImage");
const computerCharacter = document.querySelector("#computerCharacterImage");

function changeUserCharacterImage (){
    if (userScore === 1) {
        userCharacterImage.src = "./Elements/Characters/6.png";
    } else if (userScore === 2){
        userCharacterImage.src = "./Elements/Characters/8.png";    
    } else if (userScore === 3) {
        userCharacterImage.src = "./Elements/Characters/10.png";
    } else if (userScore === 4) {
        userCharacterImage.src = "./Elements/Characters/12.png";
    }

}

function changeComputerCharacterImage (){
    if (computerScore === 1) {
        computerCharacterImage.src = "./Elements/Characters/5.png";
    } else if (computerScore === 2){
        computerCharacterImage.src = "./Elements/Characters/7.png";    
    } else if (computerScore === 3) {
        computerCharacterImage.src = "./Elements/Characters/9.png";
    } else if (computerScore === 4) {
        computerCharacterImage.src = "./Elements/Characters/11.png";
    } 

    if (computerScore>userScore && round === 5) {
        userCharacterImage.src = "./Elements/Characters/4.png";
        computerCharacterImage.src = "./Elements/Characters/1.png";
    } 
    
    if (computerScore<userScore && round === 5) {
       userCharacterImage.src = "./Elements/Characters/2.png";
       computerCharacterImage.src = "./Elements/Characters/3.png";
    }

}


/*var hScore = 0;
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
*/


