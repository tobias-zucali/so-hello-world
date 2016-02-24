import React from 'react';
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
        <div>
        	<h1>Hello World!</h1>
            {this.props.children}
           	<ul role="nav">
	            <li><Link to="/one" activeStyle={{ color: 'red' }}>One</Link></li>
	            <li><Link to="/one/bar" activeStyle={{ color: 'red' }}>One/bar</Link></li>
	            <li><Link to="/two" activeStyle={{ color: 'red' }}>Two (with draft.js)</Link></li>
	            <li><Link to="/two/bar" activeStyle={{ color: 'red' }}>Two/bar</Link></li>
	        </ul>
        </div>
    );
  }

  /**
   * @ignore
   */ 
  something() {}

  somethingElse() {}
};

/**
 * protoTypes
 */
App.propTypes =  {
  /** @type {Object[]} some prop */
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string
};

export default App;