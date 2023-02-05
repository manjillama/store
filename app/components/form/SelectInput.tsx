import React, { ChangeEvent } from "react";

interface Props {
  label?: string;
  name: string;
  value: any;
  onChange: (e: ChangeEvent<any>) => any;
  options: {
    value: string | number;
    label: string | number;
    disabled?: boolean;
  }[];
  [key: string]: any;
}
export const SelectInput = ({
  name,
  value,
  onChange,
  label,
  hasError,
  options,
  ...otherProps
}: Props): JSX.Element => (
  <div className={`form-group${hasError ? " has-error" : ""}`}>
    {label && <label>{label}</label>}
    <select
      className="form-control"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      {...otherProps}
    >
      {options.map((option) => (
        <option
          key={option.label}
          value={option.value}
          disabled={option.disabled ? true : false}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
