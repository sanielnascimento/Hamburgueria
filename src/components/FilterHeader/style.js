import styled from "styled-components";

export const StyledFilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 131%;
    color: var(--grey100);
  }

  h2 > span {
    color: var(--grey050);
  }
`;
