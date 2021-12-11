import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              <div className="columns">
                <div className="column" id='test-column'>
                  Drop
                </div>
                <div className="column" id='test-column'>
                  Zone
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;