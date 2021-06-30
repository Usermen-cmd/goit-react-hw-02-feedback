import { Component } from 'react';
import Statistic from 'components/Statistic/Statistic';
import Buttons from './Buttons/Buttons';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonHandler = e => {
    const labelBtn = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      return { [labelBtn]: prevState[labelBtn] + 1 };
    });
  };
  countTotalFeedback = () => {
    const feedbacks = Object.values(this.state);
    return feedbacks.reduce((acc, num) => (acc += num), 0);
  };

  // countPositiveFeedbackPercentage = () => {

  // };
  render() {
    console.log(this.countTotalFeedback());
    const { good, neutral, bad } = this.state;
    const btnLabels = Object.keys(this.state);
    const feedbackstotal = this.countTotalFeedback();

    return (
      <div className="feedBackService">
        <h2>Please leave feedback</h2>
        <Buttons handler={this.onButtonHandler} labels={btnLabels} />
        <Statistic states={{ good, neutral, bad, feedbackstotal }} />
      </div>
    );
  }
}

export default Feedback;
