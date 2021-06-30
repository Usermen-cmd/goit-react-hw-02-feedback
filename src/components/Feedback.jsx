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

  countPositiveFeedbackPercentage = (good, bad) => {
    const persentage = Math.floor((good / (good + bad)) * 100);
    return persentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const btnLabels = Object.keys(this.state);
    const feedbacksTotal = this.countTotalFeedback();
    const positivrFeedbacks = this.countPositiveFeedbackPercentage(good, bad);

    return (
      <div className="feedBackService">
        <h2>Please leave feedback</h2>
        <Buttons handler={this.onButtonHandler} labels={btnLabels} />
        {feedbacksTotal ? (
          <Statistic
            states={{ good, neutral, bad, feedbacksTotal, positivrFeedbacks }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Feedback;
