import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './cardLike.scss';

function CardLike() {
  return (
    <div className="cardLike">
      <div className="cardLike-comment socials">
        <FontAwesomeIcon icon={faComment} />
        <span>2</span>
      </div>
      <div className="cardLike-retweet socials">
        <FontAwesomeIcon icon={faRetweet} />
        <span>47</span>
      </div>
      <div className="cardLike-heart socials">
        <FontAwesomeIcon icon={faHeart} />
        <span>190</span>
      </div>
      <div className="cardLike-envelope socials">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}

export default CardLike;
