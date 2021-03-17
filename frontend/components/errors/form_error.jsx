import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const capitalize_Words = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const FormError = props => {
    const errors = props.errors
      ? props.errors.map((error) => (
          <div className="form-error">
            <span className="form-error-icon">
              <FontAwesomeIcon icon={faExclamationCircle} />
            </span>
            <span className="form-error-message">{capitalize_Words(error)}</span>
          </div>
        ))
      : null;
    return (
      <div className="form-errors-container">
        {errors}
      </div>
    );
}

export default FormError;