import React, {Component} from 'react';

class Registration extends Component {
    state = {
        data: {
            name: '',
            father: '',
            mother: '',
            password: '',
            birthDate: '',
            email: ''
        }
    }

    handleChange = e =>{
        this.setState({
            ...this.state.data
        })
    }

    submitHandle = e =>{
        e.preventDefault()
        console.log(this.state.data)
        e.target.reset()
        this.setState({
            data: {
                name: '',
                father: '',
                mother: '',
                password: '',
                birthDate: '',
                email: ''
            }
        })
    }
    render() {
        return (
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <form onSubmit={this.submitHandle}>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='text-danger'>Name</label>
                                        <input onChange={this.handleChange} className='form-control' type='text' placeholder='Name' name='name' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='text-danger'>Father's Name</label>
                                        <input className='form-control' type='text' placeholder='Name' name='father' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='text-danger'>Mother's Name</label>
                                        <input className='form-control' type='text' placeholder='Name' name='mother' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='text-danger'>Email</label>
                                        <input className='form-control' type='text' placeholder='Name' name='email' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='text-danger'>Password</label>
                                        <input className='form-control' type='text' placeholder='Name' name='password' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='text-danger'>BirthDay</label>
                                        <input className='form-control' type='text' placeholder='Name' name='birthDay' />
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-outline-dark' type='submit'>Registration</button>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Registration;