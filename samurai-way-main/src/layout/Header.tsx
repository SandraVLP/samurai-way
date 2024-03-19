import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <StyledHeader className="header">
      <StyledImg alt="logo" src={logo}/>
      <p>Header </p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

`

const StyledImg = styled.img`
  width: 20px;
`