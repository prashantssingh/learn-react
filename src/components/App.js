import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes : {},
    order : {}
  };

  addFish = fish => {
    // Fishes is going to be map of fish objects.
    // Ideally, you should never edit the original object (mutate the mai object),
    // instead, the good way is to make a shallow copy (only one level deep) and 
    // mutate this new object and at the end of it simply replace the original object 
    //  with the resulting object of the above step.
    
    // 1. Make a shallow copy of the fishes
    const fishes = { ...this.state.fishes}; // spreading the field as they are in the main obj
    // 2. Add new fish to fishes 
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to the state
    this.setState({
      fishes: fishes
    })
  };

  loadSampleFIshes = () => {
    this.setState({ fishes: sampleFishes});
  };

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
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App