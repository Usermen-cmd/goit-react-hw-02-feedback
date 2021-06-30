import { Component } from 'react';
import Statistic from 'components/Statistic/Statistic';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonHandler = e => {
    const labelBtn = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      return { ...{ [labelBtn]: prevState[labelBtn] + 1 } };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="feedBackService">
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.onButtonHandler}>
            Good
          </button>
          <button type="button" onClick={this.onButtonHandler}>
            Neutral
          </button>
          <button type="button" onClick={this.onButtonHandler}>
            Bad
          </button>
        </div>
        <Statistic options={{ good, neutral, bad }} />
      </div>
    );
  }
}

export default Feedback;
