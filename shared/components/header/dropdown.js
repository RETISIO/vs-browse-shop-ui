import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function HeaderAccountActionLinks() {
  return (
    <Dropdown>
      <Dropdown.Toggle id="headerAccnt-dropdown">
        <i className="icon icon-user fas fa-user-circle"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HeaderAccountActionLinks;
