const Buttons = ({ handler, labels }) => {
  console.log(labels);
  return (
    <>
      {labels.map(el => {
        return (
          <button className="button" type="button" onClick={handler} key={el}>
            {el}
          </button>
        );
      })}
      {/* <button type="button" onClick={handler}>
        Good
      </button>
      <button type="button" onClick={handler}>
        Neutral
      </button>
      <button type="button" onClick={handler}>
        Bad
      </button> */}
    </>
  );
};
export default Buttons;
