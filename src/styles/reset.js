import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;    
}

body{
    position: relative;
    font-family: 'Inter', sans-serif;
}

img{
    max-width: 100%;
}

button{
    cursor: pointer;
    background: transparent;
    outline: none;
}
`;
