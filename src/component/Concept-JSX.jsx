import React, {Component} from 'react';
class ConceptJsx extends Component {
    render() {
        //This is Javascript syntax
        // return React.createElement('div', {className:'App'}, [
        //     React.createElement('h1', null, 'Welcome'),
        //     React.createElement('p', null, 'This is JSX File basic concept')
        // ])
        return (
            // This is JSX Syntax
            // We can use one root element in JSX file. When we use multiple root element is JSX file there uer react Fragment
            <React.Fragment>
                <div className="App">
                    <h1>Welcome</h1>
                    <p>This is JSX File basic concept</p>
                </div>
                <div className="root-no-two">
                    <h3>This is JSX Root Number Two</h3>
                </div>
            </React.Fragment>
        );
    }
}

export default ConceptJsx;