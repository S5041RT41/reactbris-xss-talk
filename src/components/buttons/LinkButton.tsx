import styled from "styled-components";

const LinkButton = styled.a`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.font.family};
  text-align: center;

  &:hover {
    text-shadow: 1px 2px 14px ${props => props.theme.colors.shadow};
  }
`;

export default LinkButton;
