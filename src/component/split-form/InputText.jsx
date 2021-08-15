import React from 'react';
import PropTypes from 'prop-types';
// This is input Component declaration
const InputText = props => (
    <div className='col-md-6'>
        <label htmlFor={props.name} className='col-form-label mb-1 text-danger'>{props.label}</label>
        <input id={props.name} onChange={props.onChange} value={props.value} name={props.name} type={props.type} className='form-control' placeholder={props.placeholder}/>
    </div>
)
// Input Component props type declaration
InputText.prototype = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
// Input Component Default props declaration
InputText.defaultProps = {
    type: 'text',
    label: '',
    placeholder:'',
}
export default InputText;