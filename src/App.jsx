import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { FilteredList } from "./components/FilteredList";
import { FilterHeader } from "./components/FilterHeader";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
import { StyledMain } from "./styles/Components/Main/style";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

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
    newArray.length === 0 &&
      toast.warning(`Pesquisa sem resultados!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  const revomeFiltered = () => {
    setFilteredProducts([]);
  };

  const handleClick = (currentId) => {
    const saleProduct = products.find((elt) => elt.id === currentId);
    if (!currentSale.includes(saleProduct)) {
      toast.success("Item adicionado ao carrinho!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCurrentSale([saleProduct, ...currentSale]);
    } else {
      toast.error("Item já adicionado antes!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
      <ToastContainer />
      {loading ? (
        <h1 className="Loading">LOADING...</h1>
      ) : (
        <>
          <Header submitFilter={submitFilter} />
          <StyledMain>
            <div className="main-content">
              {filteredProducts.length === 0 ? (
                <ProductsList handleClick={handleClick} products={products} />
              ) : (
                <div>
                  <FilterHeader
                    currentFilt={currentFilt}
                    revomeFiltered={revomeFiltered}
                  />
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
