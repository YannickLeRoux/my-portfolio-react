import React from 'react';

const FormInput = ({
  inputName, inputLabel, inputType, inputValue, onInputChange
}) => (
  <p className="form-group">
    <label htmlFor={inputName}>{inputLabel}</label>
    <input
      className="form-control"
      type={inputType}
      id={inputName}
      name={inputName}
      value={inputValue}
      onChange={onInputChange}
    />
  </p>
);

export default FormInput;
