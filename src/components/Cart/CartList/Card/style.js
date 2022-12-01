import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 80px;

  figure {
    width: 80px;
    height: 80px;
    background-color: var(--grey020);
    border-radius: 5px;
  }

  .CardDescription {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0 20px 10px;
    width: 76.6763%;
    height: 100%;
  }

  .CardDescription > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .CardDescription > div > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 171%;
    color: var(--grey100);
  }

  .CardDescription > div > button {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--grey050);
    border: none;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: var(--grey050);
  }
`;
