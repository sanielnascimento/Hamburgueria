import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  width: 100%;
  height: 80px;
  background-color: var(--grey000);
  margin-bottom: 2rem;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1375px;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    height: 140px;
    padding: 1rem 2%;
    margin-bottom: 1rem;
    .header-content {
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
