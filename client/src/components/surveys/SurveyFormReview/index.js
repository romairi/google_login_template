import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {FIELDS} from "../constants";
import {withRouter} from 'react-router-dom';
// import {submitSurvey} from '../../../redux/actions';
import * as actions from '../../../redux/actions';


/**
 * SurveyFormReview shows users their form inputs for review
 * @returns {*}
 * @constructor
 */
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

    const reviewFields = _.map(FIELDS, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button className="green btn-flat white-text right" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

function mapStateToProps(state) {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
