import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-end navbar-end-force">
          <a className="navbar-item navbar-item-drop">
            <div className="columns drop-zone">
              <div className="column drop-content" id='rohza-text'>
                Drop
              </div>
              <div className="column drop-content drop-content-end" id='rohza-text'>
                Zone
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
