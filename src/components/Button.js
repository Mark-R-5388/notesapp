const Button = ({ buttonFunction, title }) => {
  return (
    <button className="note_button" onClick={buttonFunction}>
      {title}
    </button>
  );
};

export default Button;
