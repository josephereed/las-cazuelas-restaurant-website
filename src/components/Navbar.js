import React from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import logo from '../images/Las-Cazuelas-logo-cropped.svg';

const customMedia = generateMedia({
  nonMobile: "992px"
})

const Navbar = () => {

  return (
    <NavbarContainer className="navigation navbar navbar-expand-lg navbar-light" style={{background: "#f5f7cb", zIndex: 13, textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,.1)'}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="/" style={{fontFamily: "rosheila"}}><embed src={logo} height="60px" style={{padding: '0', margin: '0%'}}/></a>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item mr-4">
        <a className="nav-link" href="#">Hours & Location</a>
      </li>
      <li className="nav-item mr-4">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item mr-4">
        <a className="nav-link" href="#">Menu</a>
      </li>
      <li className="nav-item mr-4">
        <a className="nav-link" href="#">Catering</a>
      </li>
      &nbsp;&nbsp;
      <li className="nav-item">
        <button type="button" className="btn btn-primary btn-sm" style={{background: "#b63456", marginRight: "2rem", borderColor: "#b63456", padding: "0"}}>
          <a className="nav-link" href="#" style={{color: "white", fontWeight: "450px"}}>Order Online</a>
        </button>
        
      </li>
    </ul>
  </div>
</NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  ${customMedia.lessThan("nonMobile")`
    // top: 0 !important;
  `}
`;
