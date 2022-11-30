import styled from "styled-components";

export const StyledButtonCard = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 100%;
  height: 60px;
  background: var(--grey020);
  border: 2px solid var(--grey020);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--grey050);

  :hover {
    background: var(--grey050);
    border: 2px solid var(--grey050);
    color: var(--grey020);
  }
`;
