import React from 'react';
import './App.css';
import QuizData from './data/QuizData';
import Question from "./components/Question"
import Check from "./components/Check"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentQuiz: [],
      selectingdMade: false,
      isCorrectAnswer: false
    }
  }

  getRandomQuestion = () => {
    let selectedQuiz = QuizData.sort(() => 0.5 - Math.random()).slice(0, 1)
    this.setState({ currentQuiz: selectedQuiz })
  }

  checkAnswer = (answer, rightAnswer) => {
    if (answer === rightAnswer) {
      this.setState({
        selectingdMade: true,
        isCorrectAnswer: true,
      })
    }
    this.setState({
      selectingdMade: true,
    })
  }

  newGame = () => {
    this.getRandomQuestion()
    this.setState({
      selectingdMade: false,
      isCorrectAnswer: false,
    })
  }

  componentDidMount() {
    this.getRandomQuestion();
  }

  render() {
    return (
      <div className="App">
        <div className="title">Quiz</div>

        {this.state.selectingdMade === false &&
          this.state.currentQuiz.map(({ question, answers, correctAnswer, questionId }) => (
            < Question question={question}
              listOfAnswers={answers}
              rightAnswer={correctAnswer}
              key={questionId}
              checkAnswer={answer => this.checkAnswer(answer, correctAnswer)}
            />
          )
          )}
        {this.state.selectingdMade ? (<Check
          newGame={this.newGame}
          isCorrectAnswer={this.state.isCorrectAnswer} />) : null}

      </div>
    );
  }
}

export default App;








