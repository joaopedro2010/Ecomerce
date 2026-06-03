import { useAppNavigation } from '../hooks/useNavigation';
import { useStore } from '../hooks/useStore';
import { formatCurrency, getProductImage } from '../utils/product';

const Home = () => {
  const { products, loading, error, addToCart } = useStore();
  const navigation = useAppNavigation();

  return (
    <main className="mx-auto w-full max-w-[1200px] flex-1 px-5 py-8">
      <section className="mb-8 rounded-xl bg-[#F8F9FA] p-6 text-center">
        <h1 className="text-3xl font-bold text-[#0054A6]">FuFuni Tech Store</h1>
        <p className="mt-2 text-[#666]">
          Produtos carregados pela API da Platzi.
        </p>
      </section>

      {loading && <p className="text-center text-[#666]">Carregando produtos...</p>}
      {!loading && error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
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

              <div className="flex min-h-[190px] flex-col gap-3 p-4">
                <h3 className="line-clamp-2 font-bold text-[#333]">
                  {product.title}
                </h3>
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

export default Home;
