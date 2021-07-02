import React, {Component} from 'react';

class ConceptState extends Component {
    constructor(){
        super()
        this.state={
            name: 'Md Tobibur Rohman',
            study: 'BSc in Computer Science',
            job: 'Web Application Developer Lerner',
            live: 'Dhaka, Bangladesh',
        }
        this.state={
            
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-auto'>
                        <h1 className='modal-header'>About Me</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name: {this.state.name}</li>
                            <li className="list-group-item">Study: {this.state.study}</li>
                            <li className="list-group-item">Job: {this.state.job}</li>
                            <li className="list-group-item">Live in: {this.state.live}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConceptState;