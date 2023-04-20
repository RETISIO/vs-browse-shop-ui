import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function HeaderAccountActionLinks(props) {
  const RenderLoginComponent = props.componentMap?.login;
  const loginHandler =() => {
    props.setshowLogin(true);
  }

  return (
    <>
    <Dropdown>
      <Dropdown.Toggle id="accountDropdown-button">
      <i className="icon icon-user fas fa-user-circle"></i>
      <span className="label-redesign" style={{ padding: '10px' }}>My Account</span>
      </Dropdown.Toggle>
      { props.isLogged ?
      <Dropdown.Menu>
        <Dropdown.Item href="/account/profile">Dashboard</Dropdown.Item>
        <Dropdown.Item href="/account/account-info">Account Info</Dropdown.Item>
        <Dropdown.Item href="/account/address-book">Address Book</Dropdown.Item>
        <Dropdown.Item href="/account/orders">Orders</Dropdown.Item>
        <Dropdown.Item href="/account/wishlist">Wishlist</Dropdown.Item>
        <Dropdown.Item onClick={() => props.signout()}>Log Out </Dropdown.Item>
      </Dropdown.Menu> :
      <Dropdown.Menu>
      <Dropdown.Item href="/account/registration">Register</Dropdown.Item>
      <Dropdown.Item onClick={() => loginHandler()}>Login</Dropdown.Item>
    </Dropdown.Menu>
       }
    </Dropdown>
    <RenderLoginComponent show={props.showLogin} />
    </>
  );
}

export default HeaderAccountActionLinks;
