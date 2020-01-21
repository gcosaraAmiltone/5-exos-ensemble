import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import WeatherApp from '../../containers/WeatherApp';
import SocialCard from '../../containers/SocialCard';

const Page = props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/social-card" component={SocialCard} />
        <Route exact path="/weather-app" component={WeatherApp} />
    </Switch>
)

Page.propTypes = {

};

export default Page;
