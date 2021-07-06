import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className="col-md-6">
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
                                <h2>My Skills</h2>
                                <button type="button" className="btn btn-primary">Primary</button>
                                <button type="button" className="btn btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-success">Success</button>
                                <button type="button" className="btn btn-danger">Danger</button>
                                <button type="button" className="btn btn-warning">Warning</button>
                                <button type="button" className="btn btn-info">Info</button>
                                <button type="button" className="btn btn-light">Light</button>
                                <button type="button" className="btn btn-dark">Dark</button>
                                <button type="button" className="btn btn-link">Link</button>
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