export const calcStatus = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  const lookup = {
    Waiting: 'Waiting for your choice!',
    Won: 'You win!!',
    Lost: 'Too bad! Better luck next time.',
    Tied: 'Tie game'
  };
  return lookup[status];
};

export const chooseRobotItem = (isCheating, playerSelection) => {
  const lookup = {
    'Tree': 'Axe',
    'Axe' : 'Moai',
    'Moai': 'Tree'
  }

  if (isCheating) {
    return lookup[playerSelection];
  }
  
  const choices = ['Moai', 'Tree', 'Axe'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
