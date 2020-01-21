import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './cardHead.scss';

function CardHead({ pseudo }) {
  return (
    <div className="cardHead">
      <div className="cardHead-content">
        <div className="cardHead-content-head">
          <span className="cardHead-content-head-title">The Practical Dev</span>
          <span className="cardHead-content-head-adress">@ThePracticalDev</span>
          <span className="cardHead-content-head-date">Sep 10</span>
        </div>
        <div className="cardHead-content-text">Learning React? Start Small.</div>
  <div className="cardHead-content-author"> author: {pseudo} </div>
      </div>
      <div className="cardHead-flash">
        <FontAwesomeIcon icon={faChevronDown}
      />
      </div>
    </div>
  );
}



export default CardHead;
