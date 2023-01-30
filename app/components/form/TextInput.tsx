import React from "react";

export const TextInput = ({
  type = "text",
  onChange,
  label,
  hasError,
  ...otherProps
}: any) => {
  return (
    <div className={`form-group${hasError ? " has-error" : ""}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        className="form-control"
        autoComplete="off"
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};
