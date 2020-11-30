import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LANDING_ROUTE} from "./constants";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

export default () => {
    return (
        <Switch>
            <Route path={LANDING_ROUTE} component={Landing} exact/>
            <Route path='/surveys' component={Dashboard} exact/>
            <Route path='/surveys/new' component={SurveyNew}/>
        </Switch>
    );
};
