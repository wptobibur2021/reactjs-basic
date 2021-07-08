import React from 'react';

const Props = (props) => {
    // When we can use props data transfer another component
    // Custom Component we send any data then we call props
    console.log('My Profile -', props)
    return <h1>Hi, My name is {props.name}</h1>
};

export default Props;