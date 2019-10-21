import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.secondary};
  width: 30rem;
  height: 25rem;
  position: absolute;
  top: 20%;
  right: 30%;
  left: 30%;
  box-shadow: 1px 0px 18px 3px ${props => props.theme.colors.shadow};
  padding: 1.5rem;
`;

export default Card;
