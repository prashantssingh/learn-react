import React from 'react';

class StorePicker extends React.Component {
  // You must return only one element (however, main element can have any number of element)
  // returning nultiple elements (siblings) in one return is an error in JSX
  // return ----->  <p>An element</p>
  //                <form className="store-selector">
  //                  <h2>Please enter a store</h2>
  //                </form>  <----- throws an error

  // But what if you must return adjacent elements?
  // Wrap all the elements inside <React.Fragment> </React.Fragment>, like - 
  // <React.Fragment>
  //   <p>An element</p>
  //   <form className="store-selector">
  //     <h2>Please enter a store</h2>
  //   </form>  <----- throws an error
  // </React.Fragment>
  // 
  // Also dummy <div> tag works just fine, but convulates the DOM

  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store!</button>
      </form>
    );
  }
}

export default StorePicker;