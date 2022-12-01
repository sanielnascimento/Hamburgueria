import styled from "styled-components";

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 346px;
  background: var(--color-white);
  border: 2px solid var(--grey020);
  border-radius: 5px;
  
  .imgBox {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 150px;
    background: var(--grey000);
    border-radius: 4.5px 4.5px 0 0;
  }

  .imgBox>img{
    max-width: 100%;
    pointer-events: none;
  }

  .descriptionBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    gap: 14px;
    width: 300px;
    height: 196px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 133%;
    color: var(--grey100);
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: var(--grey050);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: var(--color-primary);
  }
`;
