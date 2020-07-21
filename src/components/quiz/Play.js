import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import questions from '../../assets/questions.json';
import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonSound from '../../assets/audio/button-sound.mp3';

import { handleButtonClick, handleOptionClick } from '../../utils/handle-button-click';
import { handleHints, handleFiftyFifty } from '../../utils/handle-advantage';
import { displayQuestions } from '../../utils/display-questions';
import { startTimer } from '../../utils/start-timer'

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      indexOfAnsweredQuestions: [],
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyFifty: false,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      previousRandomNumbers: [],
      time: {}
    }
    this.interval = null;
    this.correctSound = React.createRef();
    this.wrongSound = React.createRef();
    this.buttonSound = React.createRef();
  }

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state
    displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion, this);
    startTimer(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      hints,
      fiftyFifty,
      time,
      indexOfAnsweredQuestions
    } = this.state;
    return (
      <>
        <Helmet><title>Quiz Page</title></Helmet>
        <>
          <audio ref={this.correctSound} src={correctNotification}></audio>
          <audio ref={this.wrongSound} src={wrongNotification}></audio>
          <audio ref={this.buttonSound} src={buttonSound}></audio>
        </>
        <div className="questions">
          <h2>Quiz Mode</h2>
          <div className="lifeline-container">
            <p>
              <span onClick={() => handleFiftyFifty(this)} className="mdi mdi-set-center mdi-24px lifeline-icon"></span>{' '}
              <span className="lifeline">{fiftyFifty}</span>
            </p>
            <p>
              <span onClick={() => handleHints(this)} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>{' '}
              <span className="lifeline">{hints}</span>
            </p>
          </div>
          <div>
            <p className="page-time">
              <span className="left">{currentQuestionIndex + 1} of {numberOfQuestions}</span>
              <span className="right">{time.minutes}:{time.seconds}{' '}<span className="mdi mdi-clock-outline mdi-24px"></span></span>
            </p>
          </div>
          <h5>{currentQuestion.question}</h5>
          {
            !indexOfAnsweredQuestions.includes(currentQuestionIndex) ?
              (<div className="options-container">
                <p onClick={(e) => handleOptionClick(e, this)} className="option">{currentQuestion.optionA}</p>
                <p onClick={(e) => handleOptionClick(e, this)} className="option">{currentQuestion.optionB}</p>
                <p onClick={(e) => handleOptionClick(e, this)} className="option">{currentQuestion.optionC}</p>
                <p onClick={(e) => handleOptionClick(e, this)} className="option">{currentQuestion.optionD}</p>
              </div>) :
              (<div className="answered-container">
                <p className="answered">You had answered this question</p>
              </div>)
          }

          <div className="button-container">
            <button
              id="previous-button"
              onClick={(e) => handleButtonClick(e, this)}
              className={classnames('', { 'disable': this.state.previousButtonDisabled })}
            >Previous</button>
            <button
              id="next-button"
              onClick={(e) => handleButtonClick(e, this)}
              className={classnames('', { 'disable': this.state.nextButtonDisabled })}
            >Next</button>
            <button id="quit-button" onClick={(e) => handleButtonClick(e, this)}>Quit</button>
          </div>
        </div>
      </>
    )
  }
}

export default Play;
