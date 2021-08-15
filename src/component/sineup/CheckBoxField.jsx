import React from "react";
import PropsTypes from 'prop-types'
const CheckBoxField = props =>(
    <div className="col-md-12 mt-2">
        <input onChange={props.handleCheckBox} className="form-check-input ml-0" type={props.type} name={props.name} checked={props.checked}/>
        <label className="form-check-label ml-3">
            {props.label}
        </label>
    </div>
)

CheckBoxField.prototype = {
    name: PropsTypes.string.isRequired,
    handleCheckBox: PropsTypes.func.isRequired,
    type: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    checked: PropsTypes.string.isRequired,
}


export default CheckBoxField