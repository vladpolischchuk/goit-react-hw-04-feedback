import React, { Component } from "react";

import Section from "./Section/Section";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

import Statistics from "./Statistics/Statistics";

import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositivePercentage = () => {
    const { good } = this.state;
    const rate = Math.floor((100 / this.countTotalFeedback()) * good);
    return rate;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div style={{
        width: '900px',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '100px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        filter: 'drop-shadow(5px 5px 10px #666)',
      }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositivePercentage()} />
          ) : (
            <Notification message="No feedback give" />
          )};
        </Section>
      </div>);
  };
};
