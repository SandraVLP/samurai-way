import React from 'react'
import styled from 'styled-components'

export function Navigation() {
  return (
    <nav className='nav'>
        <StyledUl>
            <StyledLi as="a">Profile</StyledLi>
            <StyledLi as="a">Messages</StyledLi>
            <StyledLi as="a">News</StyledLi>
            <StyledLi as="a">Music</StyledLi>
            <StyledLi as="a">Settingd</StyledLi>
        </StyledUl>    
    </nav>
  )
}

const StyledUl = styled.ul `
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

const StyledLi = styled.li`
  cursor: pointer;
  text-decoration: none;
`