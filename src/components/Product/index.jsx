import React from "react";
import { StyledButton } from "../../styles/Components/Button/style";
import { StyledProduct } from "./Product";

export const Product = ({handleClick, elt, className }) => {
  const { category, img, id, name, price } = elt;
  return (    
    <StyledProduct className={className}>
      <div className="imgBox">
        <img src={img} alt={name} />
      </div>
      <div className="descriptionBox">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>R$ {(price).toFixed(2)}</p>
        <StyledButton onClick={() => handleClick(id)}>Adicionar</StyledButton>
      </div>
    </StyledProduct>
  );
};