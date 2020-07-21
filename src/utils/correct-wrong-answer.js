import M from 'materialize-css';
import { displayQuestions } from './display-questions'

const correctAnswer = (context) => {
  M.toast({
    html: 'Correct Answer!',
    classes: 'toast-valid',
    displayLength: 1500
  });
  context.setState(prevState => ({
    score: prevState.score + 1,
    correctAnswers: prevState.correctAnswers + 1,
    currentQuestionIndex: prevState.currentQuestionIndex + 1,
    numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
  }), () => {
    if (context.state.nextQuestion === undefined) {
      context.endGame();
    } else {
      displayQuestions(context.state.questions, context.state.currentQuestion, context.state.nextQuestion, context.state.previousQuestion, context);
    }
  })
}

const wrongAnswer = (context) => {
  navigator.vibrate(1000);
  M.toast({
    html: 'Wrong Answer!',
    classes: 'toast-invalid',
    displayLength: 1500
  });
  context.setState(prevState => ({
    wrongAnswers: prevState.wrongAnswers + 1,
    currentQuestionIndex: prevState.currentQuestionIndex + 1,
    numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
  }), () => {
    if (context.state.nextQuestion === undefined) {
      context.endGame();
    } else {
      displayQuestions(context.state.questions, context.state.currentQuestion, context.state.nextQuestion, context.state.previousQuestion, context);
    }
  })
}

export {
  correctAnswer,
  wrongAnswer
}