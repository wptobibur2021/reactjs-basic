import React from "react";
import TextField from "./TextField"
import PropTypes from 'prop-types'
import RadioField from "./RadioField";
import CheckBoxField from "./CheckBoxField";

const SineUpForm = ({data, handleChange, submitHandle, btnText, agreementHandle, agreement, errors}) =>{
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
                    error = {errors.fullName}
                />

                <TextField
                    name = 'fatherName'
                    value = {data.fatherName}
                    placeholder='Type Father Name'
                    onChange = {handleChange}
                    label = 'Father Name'
                    type = 'text'
                    error = {errors.fatherName}
                />
                <TextField
                    name = 'motherName'
                    value = {data.motherName}
                    placeholder='Type mother Name'
                    onChange = {handleChange}
                    label = 'Mother Name'
                    type = 'text'
                    error = {errors.motherName}
                />
                <TextField
                    name = 'password'
                    value = {data.password}
                    placeholder='******'
                    onChange = {handleChange}
                    label = 'Password'
                    type = 'password'
                    error = {errors.password}
                />
                <TextField
                    name = 'address'
                    value = {data.address}
                    placeholder='Type Full Address'
                    onChange = {handleChange}
                    label = 'Address'
                    type = 'text'
                    error = {errors.address}
                />
                <TextField
                    name = 'birthDay'
                    value = {data.birthDay}
                    onChange = {handleChange}
                    label = 'Birth Day'
                    type = 'date'
                    error = {errors.birthDay}
                />
                <RadioField
                    value = 'Male'
                    onChange = {handleChange}
                    label = 'Male'
                    error = {errors.gender}
                />
                <RadioField
                    value = 'Female'
                    onChange = {handleChange}
                    label = 'Female'
                    error = {errors.gender}
                />
                <RadioField
                    value = 'Others'
                    onChange = {handleChange}
                    label = 'Others'
                    error = {errors.gender}
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
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
}

export default SineUpForm