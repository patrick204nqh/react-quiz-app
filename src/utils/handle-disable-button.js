const handleDisableButton = (context) => {
  if (context.state.previousQuestion === undefined || context.state.currentQuestionIndex === 0) {
    context.setState({
      previousButtonDisabled: true
    })
  } else {
    context.setState({
      previousButtonDisabled: false
    })
  }

  if (context.state.nextQuestion === undefined || context.state.currentQuestionIndex + 1 === context.state.numberOfQuestions) {
    context.setState({
      nextButtonDisabled: true
    })
  } else {
    context.setState({
      nextButtonDisabled: false
    })
  }
}

export { handleDisableButton }