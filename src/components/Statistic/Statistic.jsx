const Statistic = ({ states }) => {
  const labelsParagraph = Object.keys(states);
  return (
    <div>
      <h3>Statistic</h3>
      {labelsParagraph.map(label => {
        return (
          <p className="feedBackItem" key={`${label}-id`}>
            {label}: {states[label] ? states[label] : 'not feedbacks'}
          </p>
        );
      })}
    </div>
  );
};
export default Statistic;
