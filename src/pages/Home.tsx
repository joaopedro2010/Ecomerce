import { useSearchParams } from 'react-router-dom';
import { useAppNavigation } from '../hooks/useNavigation';
import { useStore } from '../hooks/useStore';
import type { Product } from '../types';
import { formatCurrency, getProductImage } from '../utils/product';

const Home = () => {
  const { products, loading, error, addToCart } = useStore();
  const navigation = useAppNavigation();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') ?? 'Todos';

  const categories = getCategories(products);
  const visibleProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((product) => product.category?.name === selectedCategory);

  function changeCategory(category: string) {
    if (category === 'Todos') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  return (
    <main className="mx-auto w-full max-w-[1200px] flex-1 px-5 py-8">
      <section className="mb-8 rounded-xl bg-[#F8F9FA] p-6 text-center">
        <h1 className="text-3xl font-bold text-[#0054A6]">FuFuni Tech Store</h1>
        <p className="mt-2 text-[#666]">
          Produtos carregados pela API da Platzi.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-xl font-bold text-[#333]">Categorias</h2>
        <div className="flex flex-wrap gap-2">
          {['Todos', ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              className={`rounded-lg border px-4 py-2 text-sm font-bold ${
                selectedCategory === category
                  ? 'border-[#0054A6] bg-[#0054A6] text-white'
                  : 'border-[#D7D7D7] bg-white text-[#333]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {loading && <p className="text-center text-[#666]">Carregando produtos...</p>}
      {!loading && error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-md transition-all hover:scale-[1.02]"
            >
              <img
                src={getProductImage(product)}
                alt={product.title}
                onError={(event) => {
                  event.currentTarget.src = '/fufuni.png';
                }}
                className="h-48 w-full object-cover"
              />

              <div className="flex min-h-[210px] flex-col gap-3 p-4">
                <h3 className="line-clamp-2 font-bold text-[#333]">
                  {product.title}
                </h3>
                <p className="text-sm text-[#666]">
                  {product.category?.name ?? 'Produto'}
                </p>
                <p className="mt-auto text-2xl font-bold text-[#0054A6]">
                  {formatCurrency(product.price)}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => navigation.goToProduct(product.id)}
                    className="rounded-lg border border-[#0054A6] bg-white px-3 py-2 text-sm font-bold text-[#0054A6]"
                  >
                    Ver
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="rounded-lg border border-[#FF6500] bg-[#FF6500] px-3 py-2 text-sm font-bold text-white"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

function getCategories(products: Product[]) {
  return Array.from(
    new Set(products.map((product) => product.category?.name).filter(Boolean)),
  ).slice(0, 6) as string[];
}

export default Home;
