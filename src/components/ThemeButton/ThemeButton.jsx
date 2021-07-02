import { Switch } from '@material-ui/core';

const ThemeButton = ({ onSwitchCheched, isChecked }) => {
  return (
    <Switch color="primary" onChange={onSwitchCheched} checked={isChecked} />
  );
};

export default ThemeButton;
