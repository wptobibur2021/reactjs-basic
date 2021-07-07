import React, {Component} from 'react';
import './Profile.css'
import AboutMe from "./About-Me";
import Skills from "./Skills";
import SocialMedia from "./Social-Media";
class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className="col-md-6 mt-5">
                        <div className="profile-information">
                            <AboutMe></AboutMe>
                            <Skills></Skills>
                            <SocialMedia></SocialMedia>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                
            </div>
        );
    }
}

export default Profile;