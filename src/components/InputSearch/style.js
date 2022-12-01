import styled from "styled-components";

export const StyledInputSearch = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 29.545454%;
  height: 60px;
  background: var(--color-white);
  border: 2px solid var(--grey020);
  border-radius: 8px;
  
  @media (max-width: 950px) {
    width: 40%;
    
  }

  @media (max-width: 700px) {
    width: 100%;
  }



  button{
    position: absolute;
    right: 10px;
  }
`;
