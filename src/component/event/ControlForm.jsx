import React, {Component} from 'react';

class ControlForm extends Component {
    state = {
        userControl: '',
        fatherControl: '',
        emailControl: '',
        birthControl: '',
        countryControl: '',
        phoneControl: '',
    }

    handleChange = event => {
        // This Is code for new value set of Sate
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitControl = event => {
        event.preventDefault();
        //This is code for console log
        console.log(this.state)
        // This is code for clear an input value after form submit
        this.setState({
            userControl:'',
            birthControl:'',
            countryControl:'',
            fatherControl:'',
            phoneControl:'',
            emailControl:''
        })
        //event.target.reset()
    }
    render() {
        const {userControl, birthControl, countryControl, fatherControl, phoneControl, emailControl} = this.state
        return (
            <>
                <hr></hr>
            <div className='col-md-6'>
                <div className='card-header mb-5'>
                    <h2 className='text-danger'>Control Form with react</h2>
                </div>
                <div className='form-row'>
                    <form onSubmit={this.submitControl}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label className='col-form-label mb-1 text-danger'>Name</label>
                                <input onChange={this.handleChange} value={userControl} name='userControl' type='text' className='form-control' placeholder='Name'/>
                            </div>
                            <div className='col-md-6'>
                                <label className='col-form-label mb-1 text-danger'>Father Name</label>
                                <input onChange={this.handleChange} value={fatherControl} name='fatherControl' type='text' className='form-control' placeholder='Father Name'/>
                            </div>
                            <div className='col-md-6'>
                                <label className='col-form-label mb-1 text-danger'>E-mail</label>
                                <input onChange={this.handleChange} value={emailControl} name='emailControl' type='email' className='form-control' placeholder='Email'/>
                            </div>
                            <div className='col-md-6'>
                                <label className='col-form-label mb-1 text-danger'>Birth Date</label>
                                <input value={birthControl} onChange={this.handleChange} name='birthControl' type='date' className='form-control' placeholder='Father Name'/>
                            </div>
                            <div className='col-md-6'>
                                <label className='col-form-label mb-1 text-danger'>Country</label>
                                <select value={countryControl} onChange={this.handleChange} name='countryControl' className='text-dark form-control'>
                                    <option className='form-control'>Please Select Country</option>
                                    <option className='form-control' value='Bangladesh'>Bangladesh</option>
                                    <option className='form-control' value='Pakistan'>Pakistan</option>
                                    <option className='form-control' value='India'>India</option>
                                    <option className='form-control' value='Canada'>Canada</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <label className='col-form-label mb-1 text-danger'>Mobile Number</label>
                                <input value={phoneControl} onChange={this.handleChange} name='phoneControl' className='form-control' type='number' placeholder='Mobile Number'/>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-outline-info mt-3 mb-5'>Submit</button>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default ControlForm;