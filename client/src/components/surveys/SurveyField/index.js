import React from "react";
import './index.scss';


/**
 * SurveyField contains logic to render a single label and text input
 */
const SurveyField = ({input, label, meta: {error, touched}}) => {
    return (
        <div className="survey-field-container">
            <label>{label}</label>
            <input className="input-survey-field" {...input}/>
            <div className="error-message">
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;
