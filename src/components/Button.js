const Button = ({ buttonFunction, title }) => {
  return <button onClick={buttonFunction}>{title}</button>;
};

export default Button;
