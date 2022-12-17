import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentGoog, setpercentGoog] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [bad, good, neutral]);
  useEffect(() => {
    const percents = Math.round((good * 100) / total);
    setpercentGoog(percents);
  }, [good, total]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{
            incGood: setGood,
            incNeutral: setNeutral,
            incBad: setBad,
          }}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentGoog}
          />
        )}
      </Section>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.object,
};
Notification.propTypes = {
  message: PropTypes.string,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
