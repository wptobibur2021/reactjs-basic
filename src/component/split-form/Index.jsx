import React, {Component} from 'react';
import Form from "./Form";
class Index extends Component {
    // This State Declaration
    state = {
        userControl: '',
        fatherControl: '',
        emailControl: '',
        birthControl: '',
        phoneControl: '',
    }
    //This is handChange Method
    handleChange = event => {
        // This Is code for new value set of Sate
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    // This is submit method
    submitControl = event => {
        event.preventDefault();
        //This is code for console log
        console.log(this.state)
        // This is code for clear an input value after form submit
        this.setState({
            userControl:'',
            birthControl:'',
            fatherControl:'',
            phoneControl:'',
            emailControl:''
        })
        //event.target.reset()
    }
    render() {
        return (
            <div className='container mt-5 pt-2 pl-3 pr-3 pb-3'>
                <div className='row'>
                    <div className='col-md-6 mb-5'>
                        <div className='card-header mb-5'>
                            <h2 className='text-danger'>Control Form with react</h2>
                        </div>
                        <div className='form-row'>
                                <Form
                                    values = {this.state}
                                    handleChange = {this.handleChange}
                                    submitControl = {this.submitControl}
                                    btnTest = 'Apply'
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;