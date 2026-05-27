import type { Product } from '../types';

const fallbackImage = '/fufuni.png';

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number.isFinite(value) ? value : 0);
}

export function getProductImage(product?: Product | null) {
  return getProductImages(product)[0];
}

export function getProductImages(product?: Product | null) {
  const images = product?.images
    ?.map((image) => cleanImageUrl(image))
    .filter((image): image is string => Boolean(image));

  return images && images.length > 0 ? images : [fallbackImage];
}

function cleanImageUrl(image: string) {
  if (!image || typeof image !== 'string') {
    return '';
  }

  const value = image.trim();

  if (value.startsWith('[')) {
    try {
      const parsed = JSON.parse(value) as unknown;
      if (Array.isArray(parsed) && typeof parsed[0] === 'string') {
        return parsed[0];
      }
    } catch {
      return value.replace(/^\[+|]+$/g, '').replace(/^"+|"+$/g, '');
    }
  }

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}
