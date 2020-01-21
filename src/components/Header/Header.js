import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './header.scss';

const Header = ({ doRequest }) => {
  
    return (
        <div className="header">
            <div className="header-title">
                <Link to="/">
                    Choisissez un appli 
                </Link>
            </div> 
            <div className="header-application">
                <NavLink
                    exact
                    to="/social-card"
                    className="header-application-link"
                >                
                    Social Card 
                </NavLink>
                <NavLink
                    exact
                    to="/weather-app"
                    className="header-application-link"
                    onClick={doRequest}
                >                
                    Weather 
                </NavLink>
                <NavLink
                    exact
                    to="/calculator"
                    className="header-application-link"
                >                
                    Calculator 
                </NavLink>
                <NavLink
                    exact
                    to="/haecker-news"
                    className="header-application-link"
                    onClick={doRequest}
                >                
                    Haecker News 
                </NavLink>
                <NavLink
                    exact
                    to="/github-issues"
                    className="header-application-link"
                    onClick={doRequest}
                >                
                    Github Issues 
                </NavLink>
            </div>           
        </div>
    )
}

Header.propTypes = {
    doRequest: PropTypes.func.isRequired,
};

export default Header;
