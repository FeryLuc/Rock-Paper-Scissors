const btnContainer = document.getElementById('btnContainer');
const myScore = document.getElementById('myScore');
const computerScore = document.getElementById('computerScore');
const resultSentence = document.getElementById('result');
let userCpt = 0;
let compCpt = 0;

btnContainer.addEventListener('click', (e) => {
  const randNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Computer choice: ' + computerChoice(randNumber));

  switch (e.target.id) {
    case 'rock':
      rockCondition(randNumber);
      break;
    case 'paper':
      paperCondition(randNumber);
      break;
    case 'scissors':
      scissorsCondition(randNumber);
      break;

    default:
      break;
  }
});

//Computer choice
function computerChoice(number) {
  let cptChoice;
  switch (number) {
    case 1:
      cptChoice = 'rock';
      break;
    case 2:
      cptChoice = 'paper';

      break;
    case 3:
      cptChoice = 'scissors';

      break;

    default:
      break;
  }
  return cptChoice;
}
//Dynamical result
function result(sentence, scorer = null, cpt = null) {
  resultSentence.innerText = sentence;
  if (scorer && cpt) {
    scorer.innerText = cpt;
  }
}
//Win/Lose Conditions
function rockCondition(randNumber) {
  if (computerChoice(randNumber) === 'rock') {
    result("It's a tie !");
  } else if (computerChoice(randNumber) === 'paper') {
    result('You lose ! paper beat rock.', computerScore, ++compCpt);
  } else if (computerChoice(randNumber) === 'scissors') {
    result('You Win ! rock beat scissors', myScore, ++userCpt);
  }
}
function paperCondition(randNumber) {
  if (computerChoice(randNumber) === 'rock') {
    result('You Win ! paper beat rock.', myScore, ++userCpt);
  } else if (computerChoice(randNumber) === 'paper') {
    result("It's a tie !");
  } else if (computerChoice(randNumber) === 'scissors') {
    result('You Lose ! paper beat rock.', computerScore, ++compCpt);
  }
}
function scissorsCondition(randNumber) {
  if (computerChoice(randNumber) === 'rock') {
    result('You Lose ! rock beat scissors.', computerScore, ++compCpt);
  } else if (computerChoice(randNumber) === 'paper') {
    result('You Win ! scissors beat paper.', myScore, ++userCpt);
  } else if (computerChoice(randNumber) === 'scissors') {
    result("It's a tie");
  }
}
