import React from 'react';

const FormError = props => {
    const errors = props.errors ? 
        props.errors.map( error => <p className="form-error">{error}</p>) : "";
    return <div className="form-errors-container">{errors}</div>
}

export default FormError;