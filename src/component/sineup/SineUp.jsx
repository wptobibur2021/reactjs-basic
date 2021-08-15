import React, {Component} from 'react';
import SineUpForm from "./SineUpForm";
import PropsTypes from 'prop-types'
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
        agreement: false
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
        console.log(this.state.values)
        e.target.reset()
        this.setState({
            values: initValues, agreement:false
        })
    }

    render() {
        return (
            <div className='container p-3'>
                <div className='row'>
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
                                    agreement = {this.state.agreement}
                                    agreementHandle={this.agreementChange}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SineUp;