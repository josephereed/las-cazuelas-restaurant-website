import React from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  nonMobile: "992px"
})

const Navbar = () => {

  return (
    <NavbarContainer className="navbar navbar-expand-lg navbar-light" style={{background: "#f9fae8", top: "24px"}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#" style={{fontFamily: "rosheila"}}><h1>Las Cazuelas</h1></a>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#">Hours & Location</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Menu</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Catering</a>
      </li>
    </ul>
  </div>
</NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  ${customMedia.lessThan("nonMobile")`
    top: 0 !important;
  `}
`;
