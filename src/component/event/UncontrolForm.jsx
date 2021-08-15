import React, {Component} from 'react';

class UncontrolForm extends Component {
    //Handle Change Submit
    submitForm = event =>{
        //When We submit form there not reload
        event.preventDefault();
        //We get All information
       // console.dir(event.target)
        //We Get Only HTML Form
       // console.log(event.target)
        //This is empty object
        const data = {};
        //We can check value get
        //console.log(event.target.userName.value);
        //We get userName inout value data below this code
        data.userName = event.target.userName.value;
        //We get userName inout value data below this code
        data.fatherName = event.target.fatherName.value;
        //We get userName inout value data below this code
        data.userEmail = event.target.userEmail.value;
        //We get userName inout value data below this code
        data.birthDay = event.target.birthDay.value;
        //We can get all inout value data below this code
        console.log(data);
        //We get reset all inout data below this code
        event.target.reset()
    }
    render() {
        return (
            <div className='col-md-6'>
                <div className='card-header mb-5'>
                    <h2 className='text-danger'>Un-control Form</h2>
                </div>
                <div className='form-row'>
                    <form onSubmit={this.submitForm}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label className='col-form-label mb-1 text-danger'>Name</label>
                            <input name='userName' type='text' className='form-control' placeholder='Name'/>
                        </div>
                        <div className='col-md-6'>
                            <label className='col-form-label mb-1 text-danger'>Father Name</label>
                            <input name='fatherName' type='text' className='form-control' placeholder='Father Name'/>
                        </div>
                        <div className='col-md-6'>
                            <label className='col-form-label mb-1 text-danger'>E-mail</label>
                            <input name='userEmail' type='email' className='form-control' placeholder='Email'/>
                        </div>
                        <div className='col-md-6'>
                            <label className='col-form-label mb-1 text-danger'>Birth Date</label>
                            <input name='birthDay' type='date' className='form-control' placeholder='Father Name'/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-outline-info mt-3 mb-5'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UncontrolForm;