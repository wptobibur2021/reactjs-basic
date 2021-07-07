import React, {Component} from 'react';

class SocialMedia extends Component {
    render() {
        return <div className="social-media mt-5">
            <h2>Social Media:</h2>
            <button type="button" className="btn btn-primary skills-item">Facebook</button>
            <button type="button" className="btn btn-secondary skills-item">Linkind</button>
            <button type="button" className="btn btn-success skills-item">Twitter</button>
        </div>
    }
}

export default SocialMedia;