import React from 'react';
import {Link} from "react-router-dom";
import {NEW_SURVEY} from "../../routes/constants";
import './index.scss';
import SurveyList from '../surveys/SurveyList';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <SurveyList/>
            <div className="fixed-action-btn">
                <Link to={NEW_SURVEY} className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
