import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from "GlobalStyle";
import { AppWrapper } from './App.styled';


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = state => {
    switch (state) {
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
        return;
    }
  };

    const countTotalFeedback = () => {
      return good + neutral + bad;
    };

    const total = countTotalFeedback();

    const countPositiveFeedbackPercentage = () => {
      return total === 0 ? 0 : Math.round((good / total) * 100);
    };

    
  const options = Object.keys({ good, neutral, bad });
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
      <AppWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleButtonClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
        <GlobalStyle />
      </AppWrapper>
    );
  };