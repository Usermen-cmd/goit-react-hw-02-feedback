import PropTypes from 'prop-types';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';
import { Button, Container } from 'styles/buttons';

const Buttons = ({ handler }) => {
  return (
    <Container>
      <Button type="button" onClick={handler}>
        <CgSmile />
        Good
      </Button>
      <Button type="button" onClick={handler}>
        <CgSmileNone />
        Neutral
      </Button>
      <Button type="button" onClick={handler}>
        <CgSmileSad />
        Bad
      </Button>
    </Container>
  );
};

Buttons.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Buttons;
