import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  ::placeholder {
    color: var(--grey020);
  }
`;
