import React, {Component} from 'react';

class Child extends Component{
    render() {
        this.props.func(this)
        return <h1>This is child Component</h1>
    }
}

class Props extends Component {
    getContext(context){
        console.log(context)
    }
    render() {
        this.getContext(this)
        return (
            <div>
                <h1>This is Props Component Element</h1>
                <Child func={this.getContext}/>
            </div>
        );
    }
}

export default Props;