import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Calculator from '../Calculator/Calculator';
import Home from '../Home/Home';
import SocialCard from '../../containers/SocialCard';
import WeatherApp from '../../containers/WeatherApp';

const Page = props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/social-card" component={SocialCard} />
        <Route exact path="/weather-app" component={WeatherApp} />
        <Route exact path="/calculator" component={Calculator} />
    </Switch>
)

Page.propTypes = {

};

export default Page;
