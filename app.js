const btnContainer = document.getElementById('btnContainer');
const myScore = document.getElementById('myScore');
const computerScore = document.getElementById('computerScore');
const resultSentence = document.getElementById('result');
let userCpt = 0;
let compCpt = 0;

btnContainer.addEventListener('click', (e) => {
  const randNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randNumber);

  if (e.target.matches('#rock')) {
    if (computerChoice(randNumber) === 'rock') {
      resultSentence.innerText = "It's tie !";
    } else if (computerChoice(randNumber) === 'paper') {
      resultSentence.innerText = 'You lose ! paper beat rock.';
      computerScore.innerText = ++compCpt;
    } else if (computerChoice(randNumber) === 'scissors') {
      resultSentence.innerText = 'You Win ! rock beat scissors.';
      myScore.innerText = ++userCpt;
    }
  } else if (e.target.matches('#paper')) {
    if (computerChoice(randNumber) === 'paper') {
      resultSentence.innerText = "It's tie !";
    } else if (computerChoice(randNumber) === 'rock') {
      resultSentence.innerText = 'You Win ! paper beat rock.';
      myScore.innerText = ++userCpt;
    } else if (computerChoice(randNumber) === 'scissors') {
      resultSentence.innerText = 'You lose ! scissors beat paper.';
      computerScore.innerText = ++compCpt;
    }
  } else if (e.target.matches('#scissors')) {
    if (computerChoice(randNumber) === 'scissors') {
      resultSentence.innerText = "It's tie !";
    } else if (computerChoice(randNumber) === 'rock') {
      resultSentence.innerText = 'You lose ! rock beat scissors.';
      computerScore.innerText = ++compCpt;
    } else if (computerChoice(randNumber) === 'paper') {
      resultSentence.innerText = 'You Win ! scissors beat paper.';
      myScore.innerText = ++userCpt;
    }
  }
});

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
