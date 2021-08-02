import React, {Component} from 'react';

class State extends Component {
    // This is old system
    // constructor() {
    //     super();
    //     //this.name = 'Md Tobibur Rohman'
    //     //this.count = 10
    //     this.state = {
    //         count: 0
    //     };
    // }

    // This is new system
    state = {
        count: 0,
        name: 'Md Tobibur Rohman',
        number: 0,
    }

    render() {

        return (
            <div className='container mt-5'>
                <h1>Name: {this.state.name}</h1>
                <p>Count: {this.state.count}</p>
                <p>Number: {this.state.number}</p>
                <button onClick={() => {
                    this.setState(prev => {
                        return{
                            count: prev.count +1
                        }
                    }, () => {
                        this.setState({number:this.state.number +1 })
                        console.log('Count:', this.state.count)
                    })
                   // this.setState({count: this.state.count +1})
                    //console.log(this.state.count)
                }} className='btn btn-primary'>Add++</button>


            </div>
        );
    }
}

export default State;