import React from "react";
import { StyledCard } from "./style";

export const Card = ({ card, removeFromCart }) => {
  const { id, name, category, img } = card;
  return (
    <StyledCard>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="CardDescription">
        <div>
          <p>{name}</p>
          <button onClick={() => removeFromCart(id)}>remover</button>
        </div>
        <span>{category}</span>
      </div>
    </StyledCard>
  );
};
