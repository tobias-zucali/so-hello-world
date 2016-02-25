import React from 'react';
import Intl from 'intl';

class Two extends React.Component {
    render() {
        const foo = (this.props.params && this.props.params.foo) ? `(${this.props.params.foo})` : null;

        return (
            <div>
                Two { foo }
            </div>
        );
    }
};

Two.propTypes =  {
};

export default Two;