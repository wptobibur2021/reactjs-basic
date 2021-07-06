import React, {Component} from 'react';
import './Profile.css'
class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className="col-md-6 mt-5">
                        <div className="profile-information">
                            <div className='about-me'>
                                <h2>Name: Md Tobibur Rohman</h2>
                                <h3>About Me</h3>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form,
                                    by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                            <div className='skills'>
                                <h2>My Skills:</h2>
                                <button type="button" className="btn btn-primary skills-item">Php</button>
                                <button type="button" className="btn btn-secondary skills-item">WordPress</button>
                                <button type="button" className="btn btn-success skills-item">ReactJS</button>
                                <button type="button" className="btn btn-danger skills-item">Laravel</button>
                            </div>
                            <div className="social-media mt-5">
                                <h2>Social Media:</h2>
                                <button type="button" className="btn btn-primary skills-item">Facebook</button>
                                <button type="button" className="btn btn-secondary skills-item">Linkind</button>
                                <button type="button" className="btn btn-success skills-item">Twitter</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                
            </div>
        );
    }
}

export default Profile;