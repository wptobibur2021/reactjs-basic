import React from "react";
import PropsTypes from 'prop-types'
const TextField = props => (
    <div className='col-md-4 p-1'>
        <label htmlFor={props.name} className='col-form-label mb-1 text-danger'>{props.label}</label>
        <input id={props.name} onChange={props.onChange} value={props.value} name={props.name} type={props.type} className='form-control' placeholder={props.placeholder}/>
    </div>
)

TextField.prototype = {
    name: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    value: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    type: PropsTypes.string.isRequired
}

TextField.defaultProps = {
    type: 'text'
}


export default TextField