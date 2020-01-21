import React from 'react';

import './cardText.scss';

function CardText({ firstname, lastname}) {
  return (
    <div className="cardText">
      <div className="cardText-head">
      <div className="cardText-head-logo">
        <div>dev</div>
      </div>
      <div className="cardText-head-content">Learning React? Start Small.</div>
      <div className="cardText-head-author">
  <div className="cardText-head-author-name">{firstname} {lastname}</div>
        <div className="cardText-head-author-image"></div>
      </div>
      </div>
      <div className="cardText-desc">      
        <div className="cardText-desc-p1">
          Learning React? Start Small.
        </div>
        <div className="cardText-desc-p2">
        Can't pry yourself from the tutorials? The cure is to make tiny little expirements apps.
        </div>
        <div className="cardText-desc-p3">dev.to </div>       
      </div>
      
    </div>
  );
}


export default CardText;
