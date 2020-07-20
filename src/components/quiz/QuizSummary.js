import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

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
    if (state) {
      this.setState({
        score: (state.correctAnswers / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
        hintsUsed: 5 - state.hintsUsed,
        fiftyFiftyUsed: 2 - state.fiftyFiftyUsed
      })
    }
  }

  render() {
    const { state } = this;
    let stats, remask;

    if (state.score <= 30) {
      remask = 'You need more practice!'
    } else if (state.score > 30 && state.score <= 50) {
      remask = 'Better luck next time'
    } else if (state.score <= 70 && state.score > 50) {
      remask = 'You can do better'
    } else if (state.score >= 71 && state.score <= 84) {
      remask = 'You did great!'
    } else {
      remask = 'You\'re an absolute genius!';
    }

    if (state) {
      // console.log(state);
      stats = (
        <>
          <div>
            <span className="mdi mdi-check-circle-outline success-icon"></span>
          </div>
          <h1>Quiz has ended</h1>
          <div className="container">
            <h4>{remask}</h4>
            <h2>Your Score: {state.score.toFixed(0)}&#37;</h2>
            <span className="stat left">Total number of questions: </span>
            <span className="right">{state.numberOfQuestions}</span><br />

            <span className="stat left">Number of attempted questions: </span>
            <span className="right">{state.numberOfAnsweredQuestions}</span><br />

            <span className="stat left">Number of Correct Answers: </span>
            <span className="right">{state.correctAnswers}</span><br />

            <span className="stat left">Number of Wrong Answers: </span>
            <span className="right">{state.wrongAnswers}</span><br />

            <span className="stat left">Hints Used: </span>
            <span className="right">{state.hintsUsed}</span><br />

            <span className="stat left">50-50 Used: </span>
            <span className="right">{state.fiftyFiftyUsed}</span>
          </div>
          <section>
            <ul>
              <li>
                <Link to="/">Back to Home</Link>
              </li>
              <li>
                <Link to="/play/quiz">Play Again</Link>
              </li>
            </ul>
          </section>
        </>
      )
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
            <li>
              <Link to="/play/quiz">Play Again</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <>
        <Helmet><title>Summary</title></Helmet>
        {stats}
      </>
    )
  }
}

export default QuizSummary;