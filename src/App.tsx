import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { StoreProvider } from './context/StoreContext';

function App() {
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho (será passada via props)
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Produto adicionado!");
  };

  return (
    <StoreProvider>
      <BrowserRouter>
        {/* O Header/Navbar fixo pode vir aqui */}
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAdd={addToCart} />} />
          <Route path="/cart" element={<Cart items={cart} />} />
          <Route path="/checkout" element={<Checkout items={cart} />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>

  );
}

export default App;