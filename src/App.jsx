import Feedback from 'components/Feedback';
import ThemeButton from 'components/ThemeButton/ThemeButton';
import THEME from 'styles/theme';
import { Component } from 'react';
import { ThemeProvider } from '@emotion/react';

class App extends Component {
  state = {
    isChecked: localStorage.getItem('theme') === 'dark',
  };

  onSwitchCheched = e => {
    const theme = e.currentTarget.checked ? 'dark' : 'light';
    this.setState(prevState => {
      return { isChecked: !prevState.isChecked };
    });
    localStorage.setItem('theme', theme);
  };

  render() {
    return (
      <ThemeProvider theme={this.state.isChecked ? THEME.dark : THEME.light}>
        <Feedback>
          <ThemeButton
            onSwitchCheched={this.onSwitchCheched}
            isChecked={this.state.isChecked}
          />
        </Feedback>
      </ThemeProvider>
    );
  }
}

export default App;
