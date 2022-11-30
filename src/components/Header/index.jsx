import React from "react";
import { InputSearch } from "../InputSearch";
import { Logo } from "../../styles/Components/Logo/style.js";
import { StyledHeader } from "./style.js";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Logo>Burguer<span> Kenzie</span></Logo>
        <InputSearch/>        
      </div>
    </StyledHeader>
  );
};
