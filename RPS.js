let userInput = ''

const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error Message: Please select from Rock, Paper, or Scissors.')
  } 
}

userInput = userInput.toLowerCase();


const getComputerChoice = () => {
  const ranNum = Math.floor(Math.random() *3);
  switch (ranNum){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }
  if (userChoice === 'bomb') {
      return 'THE BOMB!?!?! NOTHING CAN BEAT THAT!! The user won!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('plane');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame.call();