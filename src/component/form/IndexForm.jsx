import React, {Component} from 'react';
import FormEvent from "../event/FormEvent";
import UncontrolForm from "../event/UncontrolForm";
import ControlForm from "../event/ControlForm";

class IndexForm extends Component {
    render() {
        return (
            <div className='container mt-5 pt-2 pl-3 pr-3 pb-3'>
                <div className='row'>
                    <UncontrolForm></UncontrolForm>
                    <FormEvent></FormEvent>
                    <ControlForm></ControlForm>
                </div>
            </div>
        );
    }
}

export default IndexForm;