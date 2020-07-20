import React from 'react';
import { Helmet } from 'react-helmet';

class QuizSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0
    }
  }

  componentDidMount() {
    const { state } = this.props.location;
    this.setState({
      score: (state.score / state.numberOfQuestions) * 100,
      numberOfQuestions: state.numberOfQuestions,
      numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      hintsUsed: 5 - state.hints,
      fiftyFiftyUsed: 2 - state.fiftyFifty
    })
  }

  render() {
    return (
      <>
        <Helmet><title>Summary</title></Helmet>
      </>
    )
  }
}

export default QuizSummary;