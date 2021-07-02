import PropTypes from 'prop-types';

import { Header, Paragraph, Container } from 'styles/statistic';

const Statistic = ({ states }) => {
  const labelsParagraph = Object.keys(states);

  return (
    <Container>
      <Header>Statistic</Header>
      {labelsParagraph.map(label => {
        return (
          <Paragraph key={`${label}-id-statistic`}>
            {label}: {states[label]}
          </Paragraph>
        );
      })}
    </Container>
  );
};

Statistic.propTypes = {
  states: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    'Total feedbacks': PropTypes.number,
    'Positive feedbacks': PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};

export default Statistic;
