import React, { Fragment } from "react";

function Input({ label, type, required, placeholder, onChange, value }) {
  return (
    <Fragment>
      <label>{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={(value) => onChange(value.target.value)}
        value={value}
      />
    </Fragment>
  );
}

export default Input;
