import React, {Component} from 'react';
import './Profile.css'
import AboutMe from "./About-Me";
import Skills from "./Skills";
import SocialMedia from "./Social-Media";
class Profile extends Component {

    me = {
        name: 'Md Tobibur Rohman',
        title: 'I am Web Application Developer',
        skillA: 'HTML5',
        skillB: 'WordPress',
        skillC: 'ReactJS',
        fb: 'https://www.facebook.com/tobibur96',
        linkedin: 'https://www.linkedin.com/in/tobibur',
        twitter: 'https://twitter.com/wdtobibur'
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className="col-md-6 mt-5">
                        <div className="profile-information">
                            <AboutMe name={this.me.name} title={this.me.title}></AboutMe>
                            <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC}></Skills>
                            <SocialMedia facebook={this.me.fb} twitter={this.me.twitter} linkedin={this.me.linkedin}></SocialMedia>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                
            </div>
        );
    }
}

export default Profile;