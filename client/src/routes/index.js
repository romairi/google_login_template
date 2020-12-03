import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HOME_ROUTE, PRIMARY_APP_PAGE} from "./constants";
import HomePage from "../components/HomePage";
import PrimaryPage from "../components/PrimaryPage";

const SurveyNew = () => <h2>SurveyNew</h2>;

export default () => {
    return (
        <Switch>
            <Route path={HOME_ROUTE} component={HomePage} exact/>
            <Route path={PRIMARY_APP_PAGE} component={PrimaryPage} exact/>
            <Route path='/surveys/new' component={SurveyNew}/>
        </Switch>
    );
};
