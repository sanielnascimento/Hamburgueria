import React from "react";
import { StyledFilteredList } from "./style";
import {Product} from "../Product"

export const FilteredList = ({handleClick, filteredProducts}) => {
  return (
    <StyledFilteredList>
      {filteredProducts.map((elt, i) => (
        <Product handleClick={handleClick} key={elt.id} elt={elt} />
      ))}
    </StyledFilteredList>
  )
}
