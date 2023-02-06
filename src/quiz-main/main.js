import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.questionsArray = [
      {
        question: "نام اولین سازنده خودروی بنزینی در جهان چیست؟",
        answers: [
          { answerText: "هنری فورد", isTrue: false },
          { answerText: "جیووانی میتسوبیشی", isTrue: false },
          { answerText: "کارل بنز", isTrue: true },
          { answerText: "نیکلا تسلا", isTrue: false },
        ],
      },
      {
        question: "کتاب هملت را چه کسی نوشته؟",
        answers: [
          { answerText: "داوینچی", isTrue: false },
          { answerText: "شکسپیر", isTrue: true },
          { answerText: "کافکا", isTrue: false },
          { answerText: "رامبراند", isTrue: false },
        ],
      },
      {
        question: "گیوتین اختراع کدام کشور است؟",
        answers: [
          { answerText: "فرانسه", isTrue: true },
          { answerText: "آلمان", isTrue: false },
          { answerText: "آمریکا", isTrue: false },
          { answerText: "روسیه", isTrue: false },
        ],
      },
      {
        question: "کوچک ترین واحد ساختمانی بدن انسان مدام است؟",
        answers: [
          { answerText: "ژن", isTrue: false },
          { answerText: "مولکول", isTrue: false },
          { answerText: "عصب", isTrue: false },
          { answerText: "سلول", isTrue: true },
        ],
      },
    ];

    this.state = {
      welcome: true,
      about: false,
      quizStarted: false,
    };
    this.questionCurrentIndex = 0;
    this.questionCount = this.questionsArray.length;
    console.log(this.questionsArray);
    this.aboutMeBtn = this.aboutMeBtn.bind(this);
    this.backBtn = this.backBtn.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  aboutMeBtn() {
    this.setState({ welcome: false, about: true });
  }

  backBtn() {
    this.setState({ welcome: true, about: false });
  }

  nextQuestion() {
    this.setState({ welcome: false, about: false, quizStarted: true });
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
                  onClick={this.nextQuestion}
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
                <a href="https://github.com/LeaReXx" target="_blank">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  href="https://discord.com/users/638113846770401307"
                  target="_blank"
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
                <button className="question-4asnwers-btn">
                  {
                    this.questionsArray[this.questionCurrentIndex].answers[0]
                      .answerText
                  }
                </button>
                <button className="question-4asnwers-btn">
                  {
                    this.questionsArray[this.questionCurrentIndex].answers[1]
                      .answerText
                  }
                </button>
                <button className="question-4asnwers-btn">
                  {
                    this.questionsArray[this.questionCurrentIndex].answers[2]
                      .answerText
                  }
                </button>
                <button className="question-4asnwers-btn">
                  {
                    this.questionsArray[this.questionCurrentIndex].answers[3]
                      .answerText
                  }
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    );
  }
}
