import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2%;
  width: 100%;
  background-color: var(--color-white);

  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1375px;
    max-width: 100%;
    margin: 0 auto;
  }
`;
