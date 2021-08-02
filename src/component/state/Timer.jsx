import React, {Component} from 'react';

class Timer extends Component {
    /* State */
    state = {
        count: 0,
    }
    timerID = null
    /* This is Increment Function Call */
    incrementCount = () => {
        this.setState({
            count: this.state.count +1
        })
    }
    /* This is Decrement Function Call */
    decrementCount = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count -1
            })
        }
    }
    /* This is Start Timer Function Call */
    timerStart = () =>{
        if(this.state.count ===0){
            alert('Please Increment your timer')
        }else if(this.state.count > 0 && !this.timerID){
            alert('Now Start timer')
            this.timerID = setInterval(() => {
                this.setState({count: this.state.count -1})
                console.log(this.state.count)
                if(this.state.count === 0){
                    alert('Timer Now Finish')
                    clearInterval(this.timerID)
                    this.timerID = null
                }
            }, 1000)
        }
    }
    /* This is Stop Timer Function Call */
    timerStop = () => {
        if(this.state.count === 0){
            alert('Timer Not Start Previous')
        }else if(this.state.count > 0){
            alert('Timer Stop Now')
            clearInterval(this.timerID)
            this.timerID = null
        }
    }
    /* This is Reset Timer Function Call */
    timerReset = () => {
        if(this.state.count === 0){
            alert('Timer Not Start Previous')
        }else if(this.state.count > 0){
            alert('Timer Reset Now')
            this.setState({count: 0})
            clearInterval(this.timerID)
            this.timerID = null
        }
    }

    render() {
        return (
            <div className='container mt-5'>
                <h1 className='modal-header text-center text-dark mb-3'>Simple Timer Clock</h1>
                <div className='flex-column text-center'>
                    <button className='btn btn-outline-dark mr-5' onClick={this.decrementCount}>Decrement</button>
                    <span className='text-danger text-lg-center'>{this.state.count}</span>
                    <button className='btn btn-outline-info ml-5' onClick={this.incrementCount}>Increment</button>
                    <br></br>
                    <button className='btn btn-dark mt-5 mr-3' onClick={this.timerStart}>Start</button>
                    <button className='btn btn-info mt-5 mr-3' onClick={this.timerStop}>Stop</button>
                    <button className='btn btn-danger mt-5' onClick={this.timerReset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;