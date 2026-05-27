export interface Category {
  id: number;
  name: string;
  slug?: string;
  image?: string;
  creationAt?: string;
  updatedAt?: string;
}

export interface Product {
  id: number;
  title: string;
  slug?: string;
  price: number;
  description: string;
  category?: Category;
  images?: string[];
  creationAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = 'pix' | 'credit' | 'boleto';
