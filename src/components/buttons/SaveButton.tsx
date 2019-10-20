import styled from "styled-components";

const SaveButton = styled.input`
  border: none;
  cursor: pointer;
  margin: 1rem;
  padding: 0.8rem;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.size};
  font-weight: ${props => props.theme.font.buttonSize};
  font-family: ${props => props.theme.font.family};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    box-shadow: 0px 1px 3px 2px ${props => props.theme.colors.shadow};
  }
`;

export default SaveButton;
