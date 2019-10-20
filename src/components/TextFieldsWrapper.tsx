import styled from "styled-components";

const TextFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > label,
  div {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.font.family};
    margin-bottom: 1rem;
  }
`;

export default TextFieldsWrapper;
