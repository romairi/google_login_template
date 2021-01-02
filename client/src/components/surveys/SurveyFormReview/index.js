import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {FIELDS} from "../constants";
import {withRouter} from 'react-router-dom';
// import {submitSurvey} from '../../../redux/actions';
import * as actions from '../../../redux/actions';
import './index.scss';


/**
 * SurveyFormReview shows users their form inputs for review
 * @returns {*}
 * @constructor
 */
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

    const reviewFields = _.map(FIELDS, ({name, label}) => {
        return (
            <div className="form-review-item" key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div className="survey-form-review-container">
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <div className="form-review-submit">
                {/*<button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>*/}
                {/*    Back*/}
                {/*</button> */}
                <button className="btn-back" onClick={onCancel}>
                    Back
                </button>
                <button className="btn-send" onClick={() => submitSurvey(formValues, history)}>
                    Send
                </button>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
