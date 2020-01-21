import React from 'react';
import './Input.scss';

function Input({ value }) {
  return (
    <div className="Input">
     <div className="Input-field">{value}</div>
    </div>
  );
}

export default Input;
