import InputText from "./InputText";
import PropTypes from "prop-types";
import React from "react";

const Form = props => (
    <form onSubmit={props.submitControl}>
        <div className='row'>

            <InputText
                name= 'userControl'
                label= 'Your Name'
                placeholder= 'Enter Your Name'
                value= {props.values.userControl}
                onChange= {props.handleChange}
            />

            <InputText
                name= 'fatherControl'
                label= 'Father Name'
                placeholder= 'Father Name'
                value= {props.values.fatherControl}
                onChange= {props.handleChange}
            />

            <InputText
                name= 'emailControl'
                type='email'
                label= 'Email'
                placeholder= 'Your Email'
                value= {props.values.emailControl}
                onChange= {props.handleChange}
            />

            <InputText
                name= 'birthControl'
                type='date'
                label= 'BirthDay'
                value= {props.values.birthControl}
                onChange= {props.handleChange}
            />

            <InputText
                name= 'phoneControl'
                type='number'
                label= 'Mobile Number'
                placeholder= 'Mobile Number'
                value= {props.values.phoneControl}
                onChange= {props.handleChange}
            />
        </div>
        <button type='submit' className='btn btn-outline-info mt-3 mb-5'>{props.btnTest}</button>
    </form>
)

Form.prototype = {
    btnTest: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    submitControl: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}
export default Form;