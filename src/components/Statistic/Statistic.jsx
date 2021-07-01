const Statistic = ({ states }) => {
  const labelsParagraph = Object.keys(states);

  return (
    <div>
      <h3>Statistic</h3>
      {labelsParagraph.map(label => {
        return (
          <p className="feedBackItem" key={`${label}-id-statistic`}>
            {label}: {states[label]}
          </p>
        );
      })}
    </div>
  );
};

export default Statistic;
