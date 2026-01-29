const Input = ({ label, type = "text", value, onChange, error }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={error ? "input error" : "input"}
      />
    </div>
  );
};

export default Input;
