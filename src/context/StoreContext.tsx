import { useEffect, useState, type ReactNode } from 'react';
import { getProductById as fetchProductById, getProducts } from '../services/api';
import type { CartItem, Product } from '../types';
import { StoreContext } from './storeContextValue';

const STORAGE_KEY = 'fufuni-cart';

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>(loadStoredCart);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setError(data.length === 0 ? 'Nao foi possivel carregar os produtos.' : '');
      setLoading(false);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: Product, quantity = 1) {
    const safeQuantity = Math.max(1, quantity);

    setCart((currentCart) => {
      const itemExists = currentCart.find((item) => item.product.id === product.id);

      if (itemExists) {
        return currentCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        );
      }

      return [...currentCart, { product, quantity: safeQuantity }];
    });
  }

  function removeFromCart(id: number) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.product.id !== id),
    );
  }

  function updateCartQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === id ? { ...item, quantity } : item,
      ),
    );
  }

  function clearCart() {
    setCart([]);
  }

  async function getProductById(id: number) {
    const productInList = products.find((product) => product.id === id);
    return productInList ?? fetchProductById(id);
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        loading,
        error,
        cartCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getProductById,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function loadStoredCart(): CartItem[] {
  const storedCart = localStorage.getItem(STORAGE_KEY);

  if (!storedCart) {
    return [];
  }

  try {
    const parsed = JSON.parse(storedCart) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
