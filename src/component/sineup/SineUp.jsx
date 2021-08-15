import React, {Component} from 'react';
import SineUpForm from "./SineUpForm";
import PropTypes from 'prop-types'
const initValues = {
    fullName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    birthDay: '',
    address: '',
    password: ''
}

class SineUp extends Component {
    // State Declaration
    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }
    // HandleChange Function/Method Declaration
    handleChange = e =>{
        this.setState({
            values:{
                ...this.state.values,
                [e.target.name]:e.target.value
            }
        })
    }
    // Agreement Change Function/Method Declaration
    agreementChange = e => {
        this.setState({
            agreement: e.target.checked
        })
    }

    // Submit Handle Function/Methods Declaration

    submitHandle = e =>{
        e.preventDefault()
        const {isValid, errors} = this.validate()
        if(isValid){
            this.props.createUsers(this.state.values)
            console.log(this.state.values)
            e.target.reset()
            this.setState({
                values: initValues, agreement:false
            })
        }else{
           this.setState({ errors })
        }

    }
    validate = () => {
        const errors = {}
        const {values: {fullName, fatherName, motherName, address, birthDay, gender, password}} = this.state

        //Validation Condition Apply
        if(!fullName){
            errors.fullName = 'Please enter your name'
        } else if(fullName.length >= 10){
            errors.fullName = 'Please type your name within 10 latter'
        }
        if(!fatherName){
            errors.fatherName = 'Please enter your father name'
        }else if(fatherName.length > 5){
            errors.fatherName = 'Please type father name within five latter'
        }

        if(!motherName){
            errors.motherName = 'Please enter your mother name'
        }else if(motherName.length > 5){
            errors.motherName = 'Please type mother name within five latter'
        }

        if(!address){
            errors.address = 'Please enter your address name'
        }else if(address.length >= 20){
            errors.address = 'Please type address within 20 latter'
        }

        if(!birthDay){
            errors.birthDay = 'Please select your Birthday'
        }

        if(!gender){
            errors.gender = 'Please select your gender'
        }

        if(!password){
            errors.password = 'Please enter your password'
        }else if(password.length >= 8){
            errors.password = 'Please type password within eight latter'
        }
        // Return Value
        return {
            errors,
            isValid: Object.keys(errors).length ===0
        }
    }

    render() {
        return (
            <div className='col-md-auto'>
                <div className='card-header mb-5'>
                    <h2 className='text-danger'>Sine Up Now</h2>
                </div>
                <div className='form-row'>
                    <SineUpForm
                        submitHandle={this.submitHandle}
                        handleChange={this.handleChange}
                        data={this.state.values}
                        btnText = 'SineUp Now'
                        errors= {this.state.errors}
                        agreement = {this.state.agreement}
                        agreementHandle={this.agreementChange}
                    />
                </div>
            </div>
        );
    }
}
SineUp.propTypes = {
    createUsers: PropTypes.func.isRequired
};

export default SineUp;