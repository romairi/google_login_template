import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HOME_ROUTE, SURVEYS, NEW_SURVEY} from "./constants";
import HomePage from "../components/HomePage";
import Dashboard from "../components/Dashboard";
import SurveyNew from "../components/surveys/SurveyNew";


export default () => {
    return (
        <Switch>
            <Route path={HOME_ROUTE} component={HomePage} exact/>
            <Route path={SURVEYS} component={Dashboard} exact/>
            <Route path={NEW_SURVEY} component={SurveyNew}/>
        </Switch>
    );
};
