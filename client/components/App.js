import React from 'react';

/**
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
const App = ({ children }) => {
  return (<div className="container">{children}</div>);
}

export default App;
