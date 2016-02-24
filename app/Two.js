import React from 'react';
import Intl from 'intl';
import Editor from './Editor';

class Two extends React.Component {
    render() {
        const foo = (this.props.params && this.props.params.foo) ? `(${this.props.params.foo})` : null;

        return (
            <div>
                Two { foo }
                <Editor />
            </div>
        );
    }
};

Two.propTypes =  {
};

export default Two;