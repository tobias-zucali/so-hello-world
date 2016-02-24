import React from 'react';
import Intl from 'intl';

class One extends React.Component {
    render() {
        const foo = (this.props.params && this.props.params.foo) ? `(${this.props.params.foo})` : null;
        return (
            <div>
                One { foo }
            </div>
        );
    }
};

One.propTypes =  {
};

export default One;