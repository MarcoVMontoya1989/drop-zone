import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-end navbar-end-force">
          {/*<div className="navbar-end">*/}
            <a className="navbar-item navbar-item-drop">
              <div className="columns drop-zone">
                <div className="column drop-content" id='test-column'>
                  Drop
                </div>
                <div className="column drop-content drop-content-end" id='test-column'>
                  Zone
                </div>
              </div>
            </a>
          {/*</div>*/}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;