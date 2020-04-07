import React from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  nonMobile: "992px"
})

const Header = () => {
  return (
    <Box className="header-fixed-top" style={{position: "relative", textAlign: "center"}}>
      Las Cazuelas Restaurant in Historic Alameda · 55 Race St, San Jose, CA, 95126 (408) 293-0115
    </Box>
  )
}

export default Header

const Box = styled.div`
  ${customMedia.lessThan("nonMobile")`
    display: none;
  `}
`;