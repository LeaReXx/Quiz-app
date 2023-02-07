import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.questionsArray = [
      {
        question: "نام اولین سازنده خودروی بنزینی در جهان چیست؟",
        answers: [
          { id: 1, answerText: "هنری فورد", isTrue: false },
          { id: 2, answerText: "جیووانی میتسوبیشی", isTrue: false },
          { id: 3, answerText: "کارل بنز", isTrue: true },
          { id: 4, answerText: "نیکلا تسلا", isTrue: false },
        ],
      },
      {
        question: "کتاب هملت را چه کسی نوشته؟",
        answers: [
          { id: 1, answerText: "داوینچی", isTrue: false },
          { id: 2, answerText: "شکسپیر", isTrue: true },
          { id: 3, answerText: "کافکا", isTrue: false },
          { id: 4, answerText: "رامبراند", isTrue: false },
        ],
      },
      {
        question: "گیوتین اختراع کدام کشور است؟",
        answers: [
          { id: 1, answerText: "فرانسه", isTrue: true },
          { id: 2, answerText: "آلمان", isTrue: false },
          { id: 3, answerText: "آمریکا", isTrue: false },
          { id: 4, answerText: "روسیه", isTrue: false },
        ],
      },
      {
        question: "کوچک ترین واحد ساختمانی بدن انسان مدام است؟",
        answers: [
          { id: 1, answerText: "ژن", isTrue: false },
          { id: 2, answerText: "مولکول", isTrue: false },
          { id: 3, answerText: "عصب", isTrue: false },
          { id: 4, answerText: "سلول", isTrue: true },
        ],
      },
    ];
    this.state = {
      welcome: true,
      about: false,
      quizStarted: false,
      endGame: false,
      score: 0,
      scorePerQuestion: 100 / this.questionsArray.length,
      correctAnswer: 0,
    };
    this.questionCurrentIndex = 0;
    this.questionCount = this.questionsArray.length;
    this.aboutMeBtn = this.aboutMeBtn.bind(this);
    this.backBtn = this.backBtn.bind(this);
    this.startQuestion = this.startQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  aboutMeBtn() {
    this.setState({ welcome: false, about: true });
  }

  backBtn() {
    this.setState({
      welcome: true,
      about: false,
      quizStarted: false,
      endGame: false,
      score: 0,
      correctAnswer: 0,
    });
    this.questionCurrentIndex = 0;
  }

  startQuestion() {
    this.setState({ welcome: false, quizStarted: true });
  }

  nextQuestion() {
    this.questionCurrentIndex += 1;
    this.questionsArray.length === this.questionCurrentIndex &&
      this.setState({
        welcome: false,
        about: false,
        quizStarted: false,
        endGame: true,
      });
  }

  calcScore(userAnswer) {
    this.setState((state) => {
      return userAnswer
        ? { correctAnswer: state.correctAnswer + 1 }
        : { correctAnswer: state.correctAnswer };
    });
    userAnswer &&
      this.setState((state) => {
        return { score: state.scorePerQuestion + state.score };
      });
  }

  render() {
    return (
      <main className="main-container">
        <section className="quiz-container">
          {this.state.welcome && (
            <div>
              <h1 className="quiz-welcome-title">
                سلام, به کوئیز اپ خوش آمدید😎
              </h1>
              <div className="quiz-welcome-btns">
                <button
                  className="quiz-btns quiz-welcome-start-btn"
                  onClick={this.startQuestion}
                >
                  شروع
                </button>
                <button
                  className="quiz-btns quiz-welcome-about-btn"
                  onClick={this.aboutMeBtn}
                >
                  درباره من
                </button>
              </div>
            </div>
          )}
          {this.state.about && (
            <div className="quiz-welcome-about">
              <h4>سپهر آقاپور</h4>
              <p className="quiz-about-text">توسعه دهنده فرانت</p>
              <div className="socials">
                <a href="mailto:dev.sepehr@gmail.com">
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                </a>
                <a
                  href="https://github.com/LeaReXx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  href="https://discord.com/users/638113846770401307"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="fa-brands fa-discord" />
                </a>
              </div>
              <button
                className="quiz-btns quiz-back-btn"
                onClick={this.backBtn}
              >
                بازگشت
              </button>
            </div>
          )}
          {this.state.quizStarted && (
            <div className="question-box">
              <span className="question-counter">
                {`${this.questionCurrentIndex + 1} / ${this.questionCount}`}
              </span>
              <p className="question-title">
                {this.questionsArray[this.questionCurrentIndex].question}
              </p>
              <div className="question-answers-box">
                {this.questionsArray[this.questionCurrentIndex].answers.map(
                  (answer) => {
                    return (
                      <button
                        className="question-4answers-btn"
                        key={answer.id}
                        onClick={() => {
                          this.nextQuestion();
                          this.calcScore(answer.isTrue);
                        }}
                      >
                        {answer.answerText}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )}
          {this.state.endGame && (
            <div className="quiz-end">
              <h3>کوئیر به پایان رسید (●'◡'●)</h3>
              <p>
                امتیاز شما <strong>{`${this.state.score} / 100`} </strong> است
              </p>
              <span>
                پاسخ درست شما به سوالات
                <strong>
                  {this.state.correctAnswer} از
                  {this.questionCount}
                </strong>
                است
              </span>
              <div className="quiz-end-correct-answer-parent">
                <strong>پاسخ درست سوالات</strong>
                <ul className="quiz-end-correct-answers">
                  {this.questionsArray.map((question) => {
                    return (
                      <li>
                        {question.answers.map((item) => {
                          return item.isTrue && item.answerText;
                        })}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <button
                  className="quiz-btns quiz-back-btn"
                  onClick={this.backBtn}
                >
                  بازگشت
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    );
  }
}
