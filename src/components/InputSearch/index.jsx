import React from "react";
import { StyledInput } from "../../styles/Components/Input/style.js";
import { StyledButton } from "../../styles/Components/Button/style.js";
import { StyledInputSearch } from "./style.js";


export const InputSearch = () => {
  return (
    <StyledInputSearch>
      <StyledInput  placeholder="Digitar Pesquisa"/>
      <StyledButton>Pesquisar</StyledButton>
    </StyledInputSearch>
  );
};
