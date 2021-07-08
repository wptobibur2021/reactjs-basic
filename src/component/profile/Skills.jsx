import React from 'react';

const Skills = (props) => {
    return <div className='skills'>
        <h2>My Skills:</h2>
        <button type="button" className="btn btn-primary skills-item">{props.skillA}</button>
        <button type="button" className="btn btn-secondary skills-item">{props.skillB}</button>
        <button type="button" className="btn btn-success skills-item">{props.skillC}</button>
    </div>
};

export default Skills;