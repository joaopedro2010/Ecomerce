import { createContext } from 'react';
import type { CartItem, Product } from '../types';

export interface Store {
  products: Product[];
  cart: CartItem[];
  loading: boolean;
  error: string;
  cartCount: number;
  subtotal: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getProductById: (id: number) => Promise<Product | null>;
}

export const StoreContext = createContext<Store | null>(null);
