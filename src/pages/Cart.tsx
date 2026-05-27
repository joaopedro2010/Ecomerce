import { useAppNavigation } from '../hooks/useNavigation';
import { useStore } from '../hooks/useStore';
import { formatCurrency, getProductImage } from '../utils/product';

const Cart = () => {
  const { cart, subtotal, removeFromCart, updateCartQuantity } = useStore();
  const navigation = useAppNavigation();

  if (cart.length === 0) {
    return (
      <main className="mx-auto w-full max-w-[900px] flex-1 px-5 py-10 text-center">
        <h1 className="text-2xl font-bold text-[#333]">Carrinho vazio</h1>
        <p className="mt-2 text-[#666]">Escolha um produto para comprar.</p>
        <button
          type="button"
          onClick={navigation.goToHome}
          className="mt-6 rounded-lg bg-[#0054A6] px-6 py-3 font-bold text-white"
        >
          Ver produtos
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 py-8">
      <h1 className="mb-6 text-2xl font-bold text-[#333]">Carrinho</h1>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.product.id}
              className="flex flex-col gap-4 rounded-xl border border-[#E0E0E0] bg-[#FAFAFA] p-4 sm:flex-row sm:items-center"
            >
              <img
                src={getProductImage(item.product)}
                alt={item.product.title}
                onError={(event) => {
                  event.currentTarget.src = '/fufuni.png';
                }}
                className="h-24 w-24 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="font-bold text-[#333]">{item.product.title}</h2>
                <p className="text-[#0054A6]">{formatCurrency(item.product.price)}</p>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      updateCartQuantity(item.product.id, item.quantity - 1)
                    }
                    className="h-8 w-8 rounded border border-[#CCC] bg-white"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      updateCartQuantity(item.product.id, item.quantity + 1)
                    }
                    className="h-8 w-8 rounded border border-[#CCC] bg-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeFromCart(item.product.id)}
                className="rounded-lg bg-[#FF6500] px-4 py-2 font-bold text-white"
              >
                Remover
              </button>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-[#E0E0E0] bg-white p-5 shadow-md">
          <h2 className="mb-4 text-xl font-bold text-[#333]">Resumo</h2>
          <div className="mb-4 flex justify-between">
            <span>Total</span>
            <strong className="text-[#0054A6]">{formatCurrency(subtotal)}</strong>
          </div>
          <button
            type="button"
            onClick={navigation.goToCheckout}
            className="w-full rounded-lg bg-[#0054A6] px-4 py-3 font-bold text-white"
          >
            Ir para checkout
          </button>
        </aside>
      </section>
    </main>
  );
};

export default Cart;
