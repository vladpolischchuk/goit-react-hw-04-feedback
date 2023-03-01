import React, { useState } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

import css from './App.module.css';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('There are not other variants of buttons!');
    };
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    console.log(total);
    return total;
  };

  const countPositivePercentage = () => {
    const rate = Math.floor((100 / countTotalFeedback()) * good);
    return rate;
  };

  return (
    <div className={css.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()} />
        ) : (
          <Notification message="No feedback give" />)};
      </Section>
    </div>);
};


export default App;
