import React, { useState } from "react";
import { StyledInput } from "../../styles/Components/Input/style.js";
import { StyledButton } from "../../styles/Components/Button/style.js";
import { StyledInputSearch } from "./style.js";


export const InputSearch = ({submitFilter}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <StyledInputSearch onSubmit={(e) => submitFilter(e, inputValue)}>
      <StyledInput onChange={(e) => setInputValue(e.target.value)}  placeholder="Digitar Pesquisa"/>
      <StyledButton type="submit" >Pesquisar</StyledButton>
    </StyledInputSearch>
  );
};
