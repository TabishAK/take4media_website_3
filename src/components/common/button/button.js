import "./button.scss";
const Button = ({ label, style }) => {
  return <button style={style}>{label}</button>;
};

export default Button;
