import React from 'react'
import styled from 'styled-components'

import ElementLogo from '../images/element-logo.png'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 180px;
  height: auto;
  align-self: center;
`;

const StyledHeader = styled.h2`
  letter-spacing: 2%;
`;

const Header = () => (
  <StyledContainer>
    <StyledImage src={ElementLogo} />
    <h2>MAY CHALLENGE</h2>
  </StyledContainer>
)

export default Header