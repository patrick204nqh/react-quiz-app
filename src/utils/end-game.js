export const endGame = (context) => {
  alert('Qiz had ended!');
  const { state } = context;
  const playerStats = {
    score: state.score,
    numberOfQuestions: state.numberOfQuestions,
    numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
    correctAnswers: state.correctAnswers,
    wrongAnswers: state.wrongAnswers,
    fiftyFiftyUsed: 2 - state.fiftyFifty,
    hintsUsed: 5 - state.hints
  };
  // console.log(playerStats);
  setTimeout(() => {
    context.props.history.push('/play/summary', playerStats);
  }, 1000);
}