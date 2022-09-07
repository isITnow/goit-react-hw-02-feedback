import React, { Component } from 'react';
import Section from './Section';
import Statistics from "./Statistics"
import FeedbackOptions from "./FeedbackOptions";
import Notification from './Notification'





export default class App extends Component { 

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] +1,
      }
     })
  }

  countTotalFeedback() { 
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() { 
    const { good } = this.state;
    return good ? Math.round((good / this.countTotalFeedback()) * 100) : 0;
  }

  
  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()

    return (
      <div>
        
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
          </Section>
        <Section title="Statistics">
          {total ? 
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        : <Notification message="There is no feedback"/>}
        </Section>

    </div>
    )
  }
}
