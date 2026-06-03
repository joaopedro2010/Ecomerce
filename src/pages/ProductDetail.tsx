import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppNavigation } from '../hooks/useNavigation';
import { useStore } from '../hooks/useStore';
import type { Product } from '../types';
import { formatCurrency, getProductImages } from '../utils/product';

const ProductDetail = () => {
  const { id } = useParams();
  const navigation = useAppNavigation();
  const { getProductById, addToCart } = useStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [shippingMessage, setShippingMessage] = useState('');

  useEffect(() => {
    async function loadProduct() {
      const productId = Number(id);

      if (!productId) {
        setProduct(null);
        setLoading(false);
        return;
      }

      const data = await getProductById(productId);
      setProduct(data);
      setSelectedImage(0);
      setQuantity(1);
      setLoading(false);
    }

    loadProduct();
  }, [getProductById, id]);

  function handleBuy() {
    if (!product) {
      return;
    }

    addToCart(product, quantity);
    navigation.goToCart();
  }

  function calculateShipping() {
    const cleanCep = cep.replace(/\D/g, '');

    if (cleanCep.length !== 8) {
      setShippingMessage('Digite um CEP com 8 numeros.');
      return;
    }

    setShippingMessage('Frete gratis. Entrega em ate 7 dias uteis.');
  }

  if (loading) {
    return <main className="p-8 text-center text-[#666]">Carregando produto...</main>;
  }

  if (!product) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold text-[#333]">Produto nao encontrado</h1>
        <Link className="mt-4 inline-block text-[#0054A6]" to="/">
          Voltar para a vitrine
        </Link>
      </main>
    );
  }

  const images = getProductImages(product);
  const pixPrice = product.price * 0.95;
  const installmentPrice = product.price / 6;
  const selectedTotal = product.price * quantity;

  return (
    <main className="mx-auto w-full max-w-[1100px] flex-1 px-5 py-8">
      <Link className="mb-6 inline-block text-sm text-[#0054A6]" to="/">
        Voltar
      </Link>

      <section className="grid grid-cols-1 gap-8 rounded-xl border border-[#E0E0E0] bg-white p-5 shadow-md md:grid-cols-2">
        <div>
          <img
            src={images[selectedImage]}
            alt={product.title}
            onError={(event) => {
              event.currentTarget.src = '/fufuni.png';
            }}
            className="aspect-square w-full rounded-xl bg-[#F8F9FA] object-cover"
          />

          {images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {images.slice(0, 4).map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`h-16 w-16 overflow-hidden rounded-lg border bg-white p-0 ${
                    selectedImage === index
                      ? 'border-[#0054A6]'
                      : 'border-[#D7D7D7]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    onError={(event) => {
                      event.currentTarget.src = '/fufuni.png';
                    }}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#333]">{product.title}</h1>

          <div className="rounded-xl bg-[#F8F9FA] p-4">
            <p className="text-4xl font-bold text-[#0054A6]">
              {formatCurrency(product.price)}
            </p>
            <p className="mt-1 text-sm text-[#666]">
              Pix: {formatCurrency(pixPrice)} com 5% de desconto
            </p>
            <p className="text-sm text-[#666]">
              6x de {formatCurrency(installmentPrice)} sem juros
            </p>
          </div>

          <p className="leading-relaxed text-[#666]">{product.description}</p>

          <div className="rounded-xl border border-[#E0E0E0] p-4">
            <h2 className="mb-3 text-lg font-bold text-[#333]">Informacoes</h2>
            <ul className="space-y-2 p-0 text-sm text-[#666]">
              <li>Vendido por FuFuni</li>
              <li>Compra simulada para o projeto</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#E0E0E0] p-4">
            <h2 className="mb-3 text-lg font-bold text-[#333]">Frete</h2>
            <div className="flex gap-2">
              <input
                value={cep}
                onChange={(event) =>
                  setCep(event.target.value.replace(/\D/g, '').slice(0, 8))
                }
                placeholder="Digite o CEP"
                className="min-w-0 flex-1 rounded-lg border border-[#CCC] px-3 py-2"
              />
              <button
                type="button"
                onClick={calculateShipping}
                className="rounded-lg bg-[#FF6500] px-4 py-2 font-bold text-white"
              >
                OK
              </button>
            </div>
            {shippingMessage && (
              <p className="mt-2 text-sm text-[#2E7D32]">{shippingMessage}</p>
            )}
          </div>

          <div className="rounded-xl border border-[#E0E0E0] p-4">
            <h2 className="mb-3 text-lg font-bold text-[#333]">Quantidade</h2>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="h-10 w-10 rounded-lg border border-[#CCC] bg-white text-xl font-bold"
              >
                -
              </button>
              <span className="min-w-10 text-center text-lg font-bold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="h-10 w-10 rounded-lg border border-[#CCC] bg-white text-xl font-bold"
              >
                +
              </button>
              <p className="text-sm text-[#666]">
                Total: <strong>{formatCurrency(selectedTotal)}</strong>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBuy}
            className="rounded-xl border-none bg-[#0054A6] px-6 py-4 text-lg font-bold text-white hover:bg-[#003D7A]"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
