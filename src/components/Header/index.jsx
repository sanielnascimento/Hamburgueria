import React from "react";
import { InputSearch } from "../InputSearch";
import { Logo } from "../../styles/Components/Logo/style.js";
import { StyledHeader } from "./style.js";

export const Header = ({ submitFilter }) => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Logo>
          Burguer<span> Kenzie</span>
        </Logo>
        <InputSearch submitFilter={submitFilter} />
      </div>
    </StyledHeader>
  );
};
