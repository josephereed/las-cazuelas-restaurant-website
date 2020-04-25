import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import logo from '../images/Las-Cazuelas-logo-cropped.svg';
import { Link } from 'react-router-dom';

const customMedia = generateMedia({
  nonMobile: '992px'
});

const Navbar = () => {
  return (
    <NavbarContainer
      className="navigation navbar navbar-expand-lg navbar-light"
      style={{
        background: '#f5f7cb',
        zIndex: 13,
        textAlign: 'center',
        borderBottom: '1px solid rgba(0,0,0,.1)'
      }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'rosheila' }}>
          <img
            src={logo}
            height="60px"
            style={{ padding: '0', margin: '0%' }}
            alt="logo"
          />
        </Link>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item mr-4">
            <Link className="nav-link nav-linker" to="/hours">
              Hours & Location
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link nav-linker" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link nav-linker" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link nav-linker" to="/catering">
              Catering
            </Link>
          </li>
          &nbsp;&nbsp;
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              style={{
                background: '#b63456',
                marginRight: '2rem',
                borderColor: '#b63456',
                padding: '0',
              }}
            >
              <Link
                className="nav-link"
                to="/order"
                style={{ fontWeight: '450px' }}
              >
                Order Online
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  ${customMedia.lessThan('nonMobile')`
    // top: 0 !important;
  `}
`;
