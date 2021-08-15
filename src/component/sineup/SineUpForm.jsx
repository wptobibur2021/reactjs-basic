import React from "react";
import TextField from "./TextField"
import PropTypes from 'prop-types'
import RadioField from "./RadioField";
import CheckBoxField from "./CheckBoxField";

const SineUpForm = ({data, handleChange, submitHandle, btnText, agreementHandle, agreement}) =>{
    return (
        <form onSubmit={submitHandle}>
            <div className='form-row'>

                <TextField
                    name = 'fullName'
                    value = {data.fullName}
                    placeholder='Type Full Name'
                    onChange = {handleChange}
                    label = 'Full Name'
                    type = 'text'
                />

                <TextField
                    name = 'fatherName'
                    value = {data.fatherName}
                    placeholder='Type Father Name'
                    onChange = {handleChange}
                    label = 'Father Name'
                    type = 'text'
                />
                <TextField
                    name = 'motherName'
                    value = {data.motherName}
                    placeholder='Type mother Name'
                    onChange = {handleChange}
                    label = 'Mother Name'
                    type = 'text'
                />
                <TextField
                    name = 'password'
                    value = {data.password}
                    placeholder='******'
                    onChange = {handleChange}
                    label = 'Password'
                    type = 'password'
                />
                <TextField
                    name = 'address'
                    value = {data.address}
                    placeholder='Type Full Address'
                    onChange = {handleChange}
                    label = 'Address'
                    type = 'text'
                />
                <TextField
                    name = 'birthDay'
                    value = {data.birthDay}
                    onChange = {handleChange}
                    label = 'Birth Day'
                    type = 'date'
                />
                <RadioField
                    value = 'Male'
                    onChange = {handleChange}
                    label = 'Male'
                />
                <RadioField
                    value = 'Female'
                    onChange = {handleChange}
                    label = 'Female'
                />
                <RadioField
                    value = 'Others'
                    onChange = {handleChange}
                    label = 'Others'
                />

                <CheckBoxField
                     name = 'agreement'
                    type = 'checkbox'
                     checked = {agreement}
                    label =  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution letters'
                    handleCheckBox = {agreementHandle}
                />

            </div>
            <button type='submit' className='btn btn-outline-info mt-3 mb-5' disabled={!agreement} >{btnText}</button>
        </form>
    )
}

SineUpForm.prototype = {
    submitHandle : PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    btnText: PropTypes.string.isRequired,
    agreementHandle: PropTypes.func.isRequired,
    agreement: PropTypes.bool.isRequired
}

export default SineUpForm