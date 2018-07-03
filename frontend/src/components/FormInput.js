import React from 'react';

const FormInput = ({ name, label, type}) => {
  return (
    <p className="form-group">
      <label for={name}>{ label }</label>
      <input className="form-control" type={type} id={name} name={name} />
    </p>
  );
};

export default FormInput;