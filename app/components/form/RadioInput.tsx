export const RadioInput = ({ name, checked, value, label, onChange }: any) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name={name}
      id={`radio-${value}`}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <label
      className="form-check-label"
      htmlFor={`radio-${value}`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  </div>
);
