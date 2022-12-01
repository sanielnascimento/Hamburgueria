import React from "react";
import { StyledButtonCard } from "../../styles/Components/ButtonCard/style";
import { StyledTotalCart } from "./style";

export const TotalCart = ({setCurrentSale, currentSale}) => {
  const total = currentSale.reduce((x, y) => x + y.price, 0);
  return (
    <StyledTotalCart>      
      <div className="DescriptionBox">
        <p>Total</p>
        <span>R$ {(total).toFixed(2)}</span>
      </div>
      <StyledButtonCard onClick={() => setCurrentSale([])}>
        Remover todos
      </StyledButtonCard>
    </StyledTotalCart>
  );
};
