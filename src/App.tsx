import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CategoryNav } from './components/CategoryNav';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StoreProvider } from './context/StoreContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-white font-sans text-[#333]">
          <Header />
          <CategoryNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
