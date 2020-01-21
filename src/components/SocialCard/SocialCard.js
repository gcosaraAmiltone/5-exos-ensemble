import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './social-card.scss';

import CardContent from '../CardContent/CardContent';
import CardLogo from '../CardLogo/CardLogo';

const SocialCard = ({ app }) => { 
    //console.log('data',data);
       
    return (
        <div className="social-card">
            {app.map(user => (
                <div className="social-card-card">
                <CardLogo />
                <CardContent 
                key={user.pseudo}
                pseudo={user.pseudo}
                firstname={user.firstname}
                lastname={user.lastname}
                />
                {console.log(user.pseudo)}
            </div> 
            ))}
        </div>
    )
}

SocialCard.propTypes = {
    app: PropTypes.array.isRequired,
};

export default SocialCard;
