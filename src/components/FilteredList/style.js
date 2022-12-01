import styled from "styled-components";

export const StyledFilteredList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px 2%;
  width: 100%;
  height: auto;

  @media (max-width: 950px) {
  }

  @media (max-width: 700px) {
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;
