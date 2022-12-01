import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { FilteredList } from "./components/FilteredList";
import { FilterHeader } from "./components/FilterHeader";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
import { StyledMain } from "./styles/Components/Main/style";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [currentFilt, setCurrentFilt] = useState("");

  const submitFilter = (e, value) => {
    e.preventDefault();
    setCurrentFilt(value);
    const newArray = products.filter(
      (product) =>
        product.category.toLowerCase().includes(value.toLowerCase()) ||
        product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(newArray);
  };

  const revomeFiltered = () => {
    setFilteredProducts([])
  }

  const handleClick = (currentId) => {
    const saleProduct = products.find((elt) => elt.id === currentId);
    !currentSale.includes(saleProduct)
      ? setCurrentSale([saleProduct, ...currentSale])
      : alert("Tá moscando, tio? Já comprou isso!");
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
        console.log(response.data);
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
          <Header submitFilter={submitFilter} />
          <StyledMain>
            <div className="main-content">
              {filteredProducts.length === 0 ? (
                <ProductsList handleClick={handleClick} products={products} />
              ) : (
                <div>
                  <FilterHeader currentFilt={currentFilt} revomeFiltered={revomeFiltered}/>
                  <FilteredList
                    handleClick={handleClick}
                    filteredProducts={filteredProducts}
                  />
                </div>
              )}
              <Cart
                removeFromCart={removeFromCart}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            </div>
          </StyledMain>
        </>
      )}
    </div>
  );
}

export default App;
