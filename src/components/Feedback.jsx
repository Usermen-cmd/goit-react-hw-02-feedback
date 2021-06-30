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

  render() {
    const { good, neutral, bad } = this.state;
    const btnLabels = Object.keys(this.state);
    return (
      <div className="feedBackService">
        <h2>Please leave feedback</h2>
        <div>
          <Buttons handler={this.onButtonHandler} labels={btnLabels} />
        </div>
        <Statistic options={{ good, neutral, bad }} />
      </div>
    );
  }
}

export default Feedback;
