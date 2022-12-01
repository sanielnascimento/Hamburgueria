import styled from "styled-components";

export const StyledCart = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  gap: 20px;
  width: 365px;
  min-height: 225px;
  background: var(--grey000);
  border-radius: 5px;

  .NoCardsInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .NoCardsInfo>h3{}
  .NoCardsInfo>span{}
`;
