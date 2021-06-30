const Statistic = ({ options }) => {
  return (
    <>
      <h3>Statistic</h3>
      <div>
        <p>Good: {options.good}</p>
        <p>Neutral: {options.neutral}</p>
        <p>Bad: {options.bad}</p>
      </div>
    </>
  );
};
export default Statistic;
