import React, {Component} from 'react';

class Event extends Component {
    state = {
        userName: 'Md Tobibur',
        phoneNo: '',
        bio: 'My name is Md Tobibur Rohman. My three years working on WordPress Development'
    }

    btnHandler = (event) =>{
        console.log(event)
    }
    formText = (event) =>{
        const text = event.target.value
        console.log(text)
    }

    stateChange = (e) =>{
        this.setState({
            userName: e.target.value
        }, () =>{
            console.log(this.state.userName)
        })
    }

    stateBio = (e) => {
        this.setState({
            bio: e.target.value
        }, () => {
            console.log(this.state.bio)
        })
    }

    stateFocus = event =>{
        console.log('I am Focus Event')
    }

    stateBlur = event =>{
        if(!this.state.userName){
            alert('Please enter your name')
        }
        console.log('I am Blur Event')
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-8 align-content-lg-center'>
                        <h1 className='modal-header text-lg-center text-dark'>React Event Start</h1>
                        <button className='btn btn-outline-dark' onClick={this.btnHandler}>Click Me</button>
                        <input onChange={this.formText} className='form-control mt-5 text-dark' placeholder='On Change Event' />
                        <hr></hr>
                        <input onBlur={this.stateBlur} onChange={this.stateChange} onFocus={this.stateFocus} name='userName' value={this.state.userName} className='form-control mt-5 text-danger focus' placeholder='Enter Your Name' />
                        {this.state.userName &&  <h4 className='text-danger mt-2'>Name: {this.state.userName}</h4>}

                        <hr></hr>

                        <textarea onChange={this.stateBio} name='bio' value={this.state.bio} className='form-control mt-5 text-info'>
                        </textarea>
                        {this.state.bio &&  <p className='text-dark mt-5'>About Me:{this.state.bio}</p>}

                        </div>
                </div>
            </div>
        );
    }
}

export default Event;