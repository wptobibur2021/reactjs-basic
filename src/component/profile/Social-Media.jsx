import React, {Component} from 'react';

class SocialMedia extends Component { props
    render() {
        return <div className="social-media mt-5">
            <h2>Social Media:</h2>
            <a className="btn btn-primary skills-item" href={this.props.facebook}>Facebook</a>
           <a className="btn btn-secondary skills-item" href={this.props.linkedin}>Linkind</a>
            <a className="btn btn-success skills-item" href={this.props.twitter}>Twitter</a>
        </div>
    }
}

export default SocialMedia;