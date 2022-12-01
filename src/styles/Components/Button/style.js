import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  height: 40px;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-white);

  :hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
    border-radius: 8px;
  }
`;
