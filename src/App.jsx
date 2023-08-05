import React from 'react';

import NavbarComponent from './component/NavbarComponent.jsx';
import ContentComponent from './component/ContentComponent.jsx';
import FooterComponent from './component/FooterComponent.jsx';

const App = () => {
  return (
    <>
      <div className="bg-dark bg-gradient min-vh-100">
        <NavbarComponent />
        <ContentComponent />
        <FooterComponent />
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
      </div>
    </>
  );
};

export default App;