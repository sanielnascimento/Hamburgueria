import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px 2%;
  width: 68.3636364%;
  height: auto;

  @media (max-width: 950px) {
    width: auto;
    flex: 1;
  }

  @media (max-width: 700px) {
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;
