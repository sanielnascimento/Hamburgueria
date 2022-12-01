import React from "react";
import { TotalCart } from "../TotalCart";
import { StyledCartHeader } from "./CartHeader/style";
import { Card } from "./CartList/Card";
import { StyledCartList } from "./CartList/style";
import { StyledCart } from "./style";

export const Cart = ({ removeFromCart, currentSale, setCurrentSale }) => {
  return (
    <StyledCart>
      <StyledCartHeader>
        <p>Carrinho de compras</p>
      </StyledCartHeader>
      {currentSale.length === 0 ? (
          <div className="NoCardsInfo">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione ítens</span>
          </div>
        ) : (
          <>
            <StyledCartList>
              {currentSale.map((card, i) => (
                <Card key={i} card={card} removeFromCart={removeFromCart} />
              ))}
            </StyledCartList>
            <TotalCart 
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
            />
          </>
        )
      }
    </StyledCart>
  );
};
