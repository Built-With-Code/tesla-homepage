/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';

const navbarStyles = css`
position: fixed;
top: 0;
left: 0;
z-index: 100;

width: 100vw;
height: 52px;
padding: 0 20px;
display: grid;
grid-template-columns: 1fr 640px 1fr;
align-items: center;

.logo {
  width: 100px;
  cursor: pointer;
}

.main {
  justify-self: center;
}

ul {
  list-style: none;
  display: flex;

  li {
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0 10px;
    cursor: pointer;
  }
}

.right {
  display: flex;
  align-items: center;
  justify-self: end;

  .menu {
    width: 18px;
    margin-left: 10px;
    cursor: pointer;
  }
}
`

const Navbar = () => {
  return (
    <nav css={navbarStyles}>
      <img src={Logo} alt="Tesla Logo" className="logo" />
      <ul className="main">
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
      </ul>
      <div className="right">
        <ul>
          <li>Shop</li>
          <li>Tesla Account</li>
        </ul>
        <img src={Menu} alt="Menu" className="menu" />
      </div>
    </nav>
  )
}

export default Navbar
