import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from "react-router-dom";
import _ from 'lodash'
import SurveyField from "../SurveyField";
import './index.scss';
import {SURVEYS} from "../../../routes/constants";
import validateEmails from "../../../utils/validateEmails";
import {FIELDS} from "../constants";


/**
 * This class shows a form for a user to add input
 */
class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
            );
        });
    }

    render() {
        return (
            <div className="survey-form-container">
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <div className="submit-items">
                        <Link to={SURVEYS} className="btn-cancel">Cancel</Link>
                        <button
                            className="btn-submit-form"
                            type="submit">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, ({name}) => {
        if (!values[name]) {
            errors[name] = 'You must fill a field';
        }
    });

    errors.recipients = validateEmails(values.recipients || '');

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
