import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
import { StyledMain } from "./styles/Components/Main/style";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const handleClick = (currentId) => {
    const saleProduct = products.find((elt) => elt.id === currentId);
    !currentSale.includes(saleProduct) ? (
      setCurrentSale([saleProduct, ...currentSale])
    ):(
      console.log(currentSale.includes(saleProduct))
    )
  };

  const removeFromCart = (currentId) => {
    const newList = currentSale.filter((elt) => elt.id !== currentId);
    setCurrentSale(newList);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get();
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <>
          <Header />
          <StyledMain>
            <div className="main-content">
              <ProductsList handleClick={handleClick} products={products} />
              <Cart removeFromCart={removeFromCart} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
            </div>
          </StyledMain>
        </>
      )}
    </div>
  );
}

export default App;
