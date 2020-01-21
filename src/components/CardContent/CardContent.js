import React from 'react';
import PropTypes from 'prop-types';
import './cardContent.scss';


import CardHead from '../CardHead/CardHead';
import CardText from '../CardText/CardText';
import CardLike from '../CardLike/CardLike';

function CardContent({ pseudo, lastname, firstname, }) {
  return (
    <div className="cardContent">
      <CardHead pseudo={pseudo}/>     
      <CardText lastname={lastname} firstname={firstname} />
      <CardLike />
    </div>
  );
}

export default CardContent;