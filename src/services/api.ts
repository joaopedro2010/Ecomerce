import type { Product } from '../types';

const API_URL = 'https://api.escuelajs.co/api/v1/products/?categoryId=2';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}`);


    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? (data as Product[]) : [];
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }

    return (await response.json()) as Product;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return null;
  }
}

export const getProdutos = getProducts;
