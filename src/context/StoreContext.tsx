import { createContext, useState, useEffect } from 'react';
import { getProducts, getProductById } from '../services/api';

export const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega os produtos assim que o app abre
  useEffect(() => {
    async function loadData() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <StoreContext.Provider value={{ 
      products, 
      cart, 
      loading, 
      addToCart, 
      removeFromCart,
      getProductById // Você pode passar a função da API direto
    }}>
      {children}
    </StoreContext.Provider>
  );
}