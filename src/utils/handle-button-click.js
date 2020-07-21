import { displayQuestions } from './display-questions';
import { playButtonSound } from './play-button-sound';
import { correctAnswer, wrongAnswer } from './correct-wrong-answer'

const handleNextButtonClick = (context) => {
  if (context.state.nextQuestion !== undefined) {
    context.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1
    }), () => {
      displayQuestions(context.state.questions, context.state.currentQuestion, context.state.nextQuestion, context.state.previousQuestion, context);
    })
  }
}

const handlePreviousButtonClick = (context) => {
  if (context.state.previousQuestion !== undefined) {
    context.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1
    }), () => {
      displayQuestions(context.state.questions, context.state.currentQuestion, context.state.nextQuestion, context.state.previousQuestion, context);
    })
  }
}

const handleQuitButtonClick = (context) => {
  playButtonSound(context);
  if (window.confirm('Are you sure you want to quit?')) {
    context.props.history.push('/');
  }
}

const handleButtonClick = (e, context) => {
  playButtonSound(context);
  switch (e.target.id) {
    case 'next-button':
      handleNextButtonClick(context);
      break;
    case 'previous-button':
      handlePreviousButtonClick(context);
      break;
    case 'quit-button':
      handleQuitButtonClick(context);
      break;
    default:
      break;
  }
}

const handleOptionClick = (e, context) => {
  if (e.target.innerHTML === context.state.answer) {
    setTimeout(() => {
      context.correctSound.current.play();
    }, 200);
    correctAnswer(context);
  } else {
    setTimeout(() => {
      context.wrongSound.current.play();
    }, 200);
    wrongAnswer(context);
  }
}

export {
  handleButtonClick,
  handleOptionClick
}