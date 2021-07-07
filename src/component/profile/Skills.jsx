import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return <div className='skills'>
            <h2>My Skills:</h2>
            <button type="button" className="btn btn-primary skills-item">Php</button>
            <button type="button" className="btn btn-secondary skills-item">WordPress</button>
            <button type="button" className="btn btn-success skills-item">ReactJS</button>
            <button type="button" className="btn btn-danger skills-item">Laravel</button>
        </div>
    }
}

export default Skills;