import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <header className="top">
        <h1>
          Catch 
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          {/* Well, WHAT THE HELL?
          This is effectively saying that for a quick I want to access JavaScript syntax (Object Unwrapping,
          to be precise) inside the JSX */}
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;