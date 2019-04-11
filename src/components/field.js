import React from 'react';

const Field = ({className, label, name, onChange, type, value}) => {
  return (
    <div className="form-group">
      <label>
        {label}: 
      </label>
      <input
        className={className}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        required
      />
    </div>
  );
}
export default Field;
