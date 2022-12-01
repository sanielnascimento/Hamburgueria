import styled from "styled-components";

export const StyledCart = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  gap: 20px;
  width: 29.545454%;
  min-height: 225px;
  background: var(--grey000);
  border-radius: 5px;

  @media (max-width: 950px) {
    width: 40%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  .NoCardsInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .NoCardsInfo > h3 {
  }
  .NoCardsInfo > span {
  }
`;
