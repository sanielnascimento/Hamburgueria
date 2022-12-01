import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secundary: #93D7AF;
    --grey100: #333333;
    --grey050: #828282;
    --grey020: #E0E0E0;
    --grey000: #F5F5F5;
    --color-white: #ffffff;
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

    --font-s1: 1.625rem;/*26px*/
    --font-s2: 1.375rem;/*22px*/
    --font-s3: 1.125rem;/*18px*/
    --font-s4: 1.000rem;/*16px*/
    --font-s5: 0.875rem;/*14px*/
    --font-s6: 0.750rem;/*12px*/
 }

 .App{
  text-align: center;
 }


 .Loading{
  margin-top: 2rem;
  color: var(--information);
 }

 ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: var(--grey000);
    border-radius: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-50);
    border-radius: 6px;
  }

`;
