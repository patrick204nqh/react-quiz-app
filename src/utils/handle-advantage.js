const handleHints = (context) => {
  if (context.state.hints > 0) {
    const options = Array.from(document.querySelectorAll('.option'));
    let indexOfAnswer;

    options.forEach((option, index) => {
      if (option.innerHTML.toLowerCase() === context.state.answer.toLowerCase()) {
        indexOfAnswer = index;
      }
    });

    while (true) {
      const randomNumber = Math.round(Math.random() * 3);
      if (randomNumber !== indexOfAnswer && !context.state.previousRandomNumbers.includes(randomNumber)) {
        options.forEach((option, index) => {
          if (index === randomNumber) {
            option.style.visibility = 'hidden';
            context.setState(prevState => ({
              hints: prevState.hints - 1,
              previousRandomNumbers: prevState.previousRandomNumbers.concat(randomNumber)
            }))
          }
        });
        break;
      }
      if (context.state.previousRandomNumbers.length >= 3) break;
    }
  }
}

const handleFiftyFifty = (context) => {
  if (context.state.fiftyFifty > 0 && context.state.usedFiftyFifty === false) {
    const options = document.querySelectorAll('.option');
    const randomNumbers = [];
    let indexOfAnswer;

    options.forEach((option, index) => {
      if (option.innerHTML.toLowerCase() === context.state.answer.toLowerCase()) {
        indexOfAnswer = index;
      }
    })

    let count = 0;
    do {
      const randomNumber = Math.round(Math.random() * 3);
      if (randomNumber !== indexOfAnswer) {
        if (randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)) {
          randomNumbers.push(randomNumber);
          count++;
        } else {
          while (true) {
            const newRandomNumber = Math.round(Math.random() * 3);
            if (!randomNumbers.includes(newRandomNumber) && !randomNumbers.includes(indexOfAnswer)) {
              randomNumbers.push(newRandomNumber);
              count++;
              break;
            }
          }
        }
      }
    } while (count < 2);
    options.forEach((option, index) => {
      if (randomNumbers.includes(index)) {
        option.style.visibility = 'hidden';
      }
    });
    context.setState(prevState => ({
      fiftyFifty: prevState.fiftyFifty - 1,
      usedFiftyFifty: true
    }))
  }
}

export {
  handleHints,
  handleFiftyFifty
}