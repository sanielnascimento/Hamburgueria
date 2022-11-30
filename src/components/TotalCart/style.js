import styled from "styled-components";

export const StyledTotalCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 10px 0 10px;
  gap: 16px;
  width: 100%;
  height: 122px;
  border-top: 2px solid var(--grey020);

  .DescriptionBox {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .DescriptionBox > p {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: var(--grey100);
  }  

  .DescriptionBox > span {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: var(--grey100);
  }  
`;
