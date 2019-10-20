import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.colors.primary};
  text-shadow: 1px 1px black;
`;

export default Header;
