import React, { Component } from 'react';

import { Box } from './Box';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../utils/index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    const totalFeedbacks = countTotalFeedback(this.state);
    const positivePercent = countPositiveFeedbackPercentage(
      good,
      totalFeedbacks
    );

    return (
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="start"
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedbacks={totalFeedbacks}
              positivePercent={positivePercent}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </Box>
    );
  }
}
