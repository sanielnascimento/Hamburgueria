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

  @media (max-width: 600px) {
    .main-content{
      flex-direction: column;
      gap: 20px;
    }
  }

  .main-content > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    height: auto;
  }
`;
