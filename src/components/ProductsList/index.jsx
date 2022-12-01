import React from "react";
import { StyledProductsList } from "./procuctList";
import { Product } from "../Product";

export const ProductsList = ({ handleClick, products }) => {
  return (
    <StyledProductsList>
      {products.map((elt) => (
        <Product handleClick={handleClick} key={elt.id} elt={elt} />
      ))}
    </StyledProductsList>
  );
};
