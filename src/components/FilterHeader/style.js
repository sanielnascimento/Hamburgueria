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
    line-height: 100%;
    color: var(--grey100);
  }

  h2 > span {
    color: var(--grey050);
  }

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 120px;
    gap: 0.8rem;

    button {
      align-self: flex-end;
      padding: 0px 10px;
      height: 36px;
      background: var(--color-primary);
      border: 2px solid var(--color-primary);
      border-radius: 8px;
      font-size: 15px;
      line-height: 17px;
      color: var(--color-white);
    }
  }

  @media (max-width: 700px) {
    button {
      margin-right: 14px;
    }
    h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 120%;
    color: var(--grey100);
  }


  }
`;
