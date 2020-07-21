import { isEmpty } from './is-empty';
import { handleDisableButton } from './handle-disable-button'
import { showOptions } from './show-options';

const displayQuestions = (questions, currentQuestion, nextQuestion, previousQuestion, context) => {
  let { currentQuestionIndex } = context.state;
  if (!isEmpty(context.state.questions)) {
    questions = context.state.questions;
    currentQuestion = questions[currentQuestionIndex];
    nextQuestion = questions[currentQuestionIndex + 1];
    previousQuestion = questions[currentQuestionIndex - 1];
    const answer = currentQuestion.answer;
    context.setState({
      currentQuestion,
      nextQuestion,
      previousQuestion,
      numberOfQuestions: questions.length,
      answer,
      previousRandomNumbers: []
    }, () => {
      showOptions(context);
      handleDisableButton(context);
    })
  }
}

export { displayQuestions }