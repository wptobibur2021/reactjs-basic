import React, {Component} from 'react';


class AboutMe extends Component { props
    render() {
        return <div className='about-me'>
            <h2>Name: {this.props.name}</h2>
            <h2>About Me</h2>
            <p>{this.props.title}</p>
        </div>
    }
}

export default AboutMe;