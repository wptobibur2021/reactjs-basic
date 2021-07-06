import React, {Component} from 'react';
class ConceptJsx extends Component {
    render() {
        return React.createElement('div', {className:'App'}, [
            React.createElement('h1', null, 'Welcome'),
            React.createElement('p', null, 'This is JSX File basic concept')
        ])
        return (
            <div className="App">
                <h1>Welcome</h1>
                <p>This is JSX File basic concept</p>
            </div>
        );
    }
}

export default ConceptJsx;