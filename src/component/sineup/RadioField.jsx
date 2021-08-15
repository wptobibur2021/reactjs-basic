import React from "react";
import PropsTypes from 'prop-types'
const RadioField = props =>(
    <div className="col-md-4 mt-2 p-1">
        <input onChange={props.onChange} className="form-check-input ml-0" type={props.type} name={props.name} value={props.value} />
        <label htmlFor={props.value} className="form-check-label ml-3">{props.label}</label>
    </div>
)
RadioField.prototype = {
    name: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    label: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired
}

RadioField.defaultProps = {
    type: 'radio',
    name: 'gender'
}

export default RadioField