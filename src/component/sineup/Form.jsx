import React from "react";
import TextField from "./TextField";

const Form = props =>{
    return (
        <form>
            <div className='row'>
                <TextField
                    name = 'fullName'
                />
            </div>
        </form>
    )
}

export default Form