import React from 'react';
import PropTypes from 'prop-types';
import './Actions.scss';

function Actions({ add, equal, substract, divis }) {
  return (
    <div className="Actions">
      <div className="Actions-divide operation" onClick={()=> divis()} >
        <div className="Input-field">&#247;</div>
      </div>
      <div className="Actions-subtract operation" onClick={()=>substract()}>
        <div className="Input-field">&#8722;</div>
      </div>
      <div className="Actions-add operation" onClick={()=>add()} >
        <div className="Input-field">&#43;</div>
      </div>
      <div className="Actions-equal operation" onClick={()=>equal()}>
        <div className="Input-field">&#61;</div>
      </div>

    </div>
  );
};

Actions.propTypes = {
  substract: PropTypes.func.isRequired,
};

export default Actions;
