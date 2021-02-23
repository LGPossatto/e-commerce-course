import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`form-input-label ${otherProps.value.length ?? "shrink"}`}
          htmlFor={label}
        >
          {label.toUpperCase()}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
