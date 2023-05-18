import "./Input.css";

const Input = (props) => {
  const manageChange = (e) => {
    props.updateValue(e.target.value);
  };

  const { type = "text" } = props;

  return (
    <div className={`input input-${type}`}>
      <label>{props.title}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={manageChange}
        type={type}
      />
    </div>
  );
};

export default Input;
