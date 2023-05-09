import "./TextField.css";

const TextField = (props) => {
  const manageChange = (e) => {
    props.updateValue(e.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.title}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={manageChange}
      />
    </div>
  );
};

export default TextField;
