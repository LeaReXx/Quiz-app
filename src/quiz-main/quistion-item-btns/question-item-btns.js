import React, { Component } from "react";

export default class QuestionItemBtns extends Component {
  render() {
    return (
      <button
        className="question-4answers-btn"
        onClick={() => this.props.onAction(this.props.isTrue)}
      >
        {this.props.answerText}
      </button>
    );
  }
}
