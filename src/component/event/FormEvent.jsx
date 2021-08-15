import React, {Component} from 'react';

class FormEvent extends Component {
    state = {
        name: '',
        fName: '',
        phoneNo: '',
        bio: '',
        country: '',
        skills: [],
        birthDate: '',
        email:'',
        gender: '',
        agree: false
    }
    submit = event =>{
        console.log(this.state)
       // console.log('Submit Done')
    }
    handleChange = event => {
        //console.log(event.target.name)
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleCheckBox = event =>{
        this.setState({
            agree:event.target.checked
        })
    }

    handleSkill = event =>{
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({skills})
        }
    }
    render() {
        //Destructor Value
        const {name, bio, birthDate, email, fName, phoneNo, skills, agree, country} = this.state
        return (
            <div className='col-md-6'>
                <div className='card-header mb-5'>
                    <h2 className='text-danger'>Form Event With State</h2>
                </div>
                <div className='form-row'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label className='col-form-label mb-1 text-danger'>Name</label>
                                        <input value={name} onChange={this.handleChange} name='name' type='text' className='form-control' placeholder='Name'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='col-form-label mb-1 text-danger'>Father Name</label>
                                        <input value={fName} onChange={this.handleChange} name='fName' type='text' className='form-control' placeholder='Father Name'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='col-form-label mb-1 text-danger'>Birth Date</label>
                                        <input value={birthDate} onChange={this.handleChange} name='birthDate' type='date' className='form-control' placeholder='Father Name'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='col-form-label mb-1 text-danger'>Country</label>
                                        <select value={country} onChange={this.handleChange} name='country' className='text-dark form-control'>
                                            <option className='form-control'>Please Select Country</option>
                                            <option className='form-control' value='Bangladesh'>Bangladesh</option>
                                            <option className='form-control' value='Pakistan'>Pakistan</option>
                                            <option className='form-control' value='India'>India</option>
                                            <option className='form-control' value='Canada'>Canada</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='col-form-label mb-1 text-danger'>Mobile Number</label>
                                        <input value={phoneNo} onChange={this.handleChange} name='phoneNo' className='form-control' type='number' placeholder='Mobile Number'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='col-form-label mb-1 text-danger'>Email</label>
                                        <input value={email} onChange={this.handleChange} name='email' className='form-control' type='email' placeholder='Email Address'/>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <input onChange={this.handleChange} className="form-check-input ml-0" type="radio" name="gender" value='Male'/>
                                        <label className="form-check-label ml-3">Male</label>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <input onChange={this.handleChange} className="form-check-input ml-0" type="radio" name="gender" value='Female'/>
                                        <label className="form-check-label ml-3">Female</label>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <input value='WordPress' onChange={this.handleSkill} className="form-check-input ml-0" type="checkbox" name="skills" checked={skills.includes('WordPress')}/>
                                        <label className="form-check-label ml-3">
                                            WordPress
                                        </label>
                                        <input value='Php' onChange={this.handleSkill} className="form-check-input ml-0" type="checkbox" name="skills" checked={skills.includes('Php')}/>
                                        <label className="form-check-label ml-3">
                                            Php
                                        </label>
                                        <input value='Java' onChange={this.handleSkill} className="form-check-input ml-0" type="checkbox" name="skills" checked={skills.includes('Java')}/>
                                        <label className="form-check-label ml-3">
                                            Java
                                        </label>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <input onChange={this.handleCheckBox} className="form-check-input ml-0" type="checkbox" name="agree" checked={agree}/>
                                        <label className="form-check-label ml-3">
                                            I agree with your services, thank you.
                                        </label>
                                    </div>
                                    <div className='col-md-12'>
                                        <label className='col-form-label mb-1 text-danger'>Bio Information</label>
                                        <textarea value={bio} onChange={this.handleChange} name='bio' className='form-control'></textarea>
                                    </div>
                                </div>
                                <button onClick={this.submit} className='btn btn-outline-info mt-4'>Show Data</button>
                        </div>
            </div>
        );
    }
}

export default FormEvent;