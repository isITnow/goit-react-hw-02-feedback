import React, { Component } from 'react';
import Section from './Section';
import Statistics from "./Statistics"
import FeedbackOptions from "./FeedbackOptions";
import Notification from './Notification'



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };



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
    return Math.round((good/this.countTotalFeedback()) * 100)
  }

  
  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    return (
    <div
      // style={{
      //   // height: '100vh',
      //     display: 'flex',
      //   flexDirection: 'column',
      //     marginLeft: 20,
      //     // marginRight: 'auto',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
          </Section>
        <Section title="Statistics">
          {total ? 
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} />
        : <Notification message="There is no feedback"/>}
          
        </Section>

    </div>
    )
  }
}