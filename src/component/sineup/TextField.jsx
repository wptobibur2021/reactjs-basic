import React from "react";
import PropsTypes from 'prop-types'
const TextField = props => (
    <div className='col-md-4 p-1'>
        <label htmlFor={props.name} className={props.error ? 'col-form-label mb-1 text-danger' : 'col-form-label mb-1 text-info'}>{props.label}</label>
        <input id={props.name} onChange={props.onChange} value={props.value} name={props.name} type={props.type} className={props.error ? 'form-control is-invalid' : 'form-control'} placeholder={props.placeholder}/>
        <small className="form-text text-danger is-invalid">{props.error}</small>
    </div>
)

TextField.prototype = {
    name: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    type: PropsTypes.string.isRequired,
    error: PropsTypes.string,
}

TextField.defaultProps = {
    type: 'text'
}


export default TextField