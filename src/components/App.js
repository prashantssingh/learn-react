import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* Props are good way to pass any captured data (just about anything) to the components.
          There are no particular tags that needs to used as such to pass these data, hence, flexibility.
          NOTE: Any data other than STRING, must be wrapped inside parenthesis. 
          
          Props provides ways to catch and store data into states for later use through one or more components */}
          <Header tagline="This is inside props" age={500} cool={true} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App