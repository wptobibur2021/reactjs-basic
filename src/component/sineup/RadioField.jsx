import React from "react";
import PropsTypes from 'prop-types'
const RadioField = props =>(
    <div className="col-md-4 mt-2 p-1">
        <input onChange={props.onChange} className={props.error ? 'form-check-input ml-0 text-danger' : 'form-check-input ml-0 text-info'} type={props.type} name={props.name} value={props.value} />
        <label htmlFor={props.value} className="form-check-label ml-3">{props.label}</label>
        <small className="form-text text-danger is-invalid">{props.error}</small>
    </div>
)
RadioField.prototype = {
    name: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    label: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    error: PropsTypes.string
}

RadioField.defaultProps = {
    type: 'radio',
    name: 'gender'
}

export default RadioField