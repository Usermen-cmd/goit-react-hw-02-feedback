const Buttons = ({ handler, labels }) => {
  return (
    <div>
      {labels.map(label => {
        return (
          <button
            className="button"
            type="button"
            onClick={handler}
            key={label}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
