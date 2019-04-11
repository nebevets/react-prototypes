import React from 'react';

const Field = ({className, label, name, onChange, type, value}) => {
  return (
    <div className="form-group">
      <label>
        {label}: 
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        className={className}
      />
    </div>
  );
}
export default Field;
