import styled from "styled-components";

const TextInput = styled.input`
  margin-left: 1rem;
  border-radius: 4px;

  &:focus {
    outline-color: ${props => props.theme.colors.shadow};
  }
`;

export default TextInput;
