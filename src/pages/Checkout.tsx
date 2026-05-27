import { useState } from 'react';
import { useAppNavigation } from '../hooks/useNavigation';
import { useStore } from '../hooks/useStore';
import type { PaymentMethod } from '../types';
import { formatCurrency } from '../utils/product';

const Checkout = () => {
  const { cart, subtotal, clearCart } = useStore();
  const navigation = useAppNavigation();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const total = Math.max(subtotal - discount, 0);

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === 'FUFUNI10') {
      setDiscount(subtotal * 0.1);
      return;
    }

    setDiscount(0);
    alert('Cupom invalido. Tente FUFUNI10.');
  }

  function finishOrder() {
    if (cart.length === 0) {
      alert('Seu carrinho esta vazio.');
      return;
    }

    alert('Compra finalizada! Simulacao concluida.');
    clearCart();
    navigation.goToHome();
  }

  return (
    <main className="mx-auto w-full max-w-[900px] flex-1 px-5 py-8">
      <h1 className="mb-6 text-2xl font-bold text-[#333]">Checkout</h1>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <div className="rounded-xl border border-[#E0E0E0] bg-white p-5 shadow-md">
            <h2 className="mb-3 text-xl font-bold text-[#333]">Pedido</h2>

            {cart.length === 0 ? (
              <p className="text-[#666]">Nenhum produto no carrinho.</p>
            ) : (
              <ul className="space-y-2 p-0">
                {cart.map((item) => (
                  <li
                    key={item.product.id}
                    className="flex justify-between gap-4 text-sm text-[#666]"
                  >
                    <span>
                      {item.quantity}x {item.product.title}
                    </span>
                    <strong className="text-[#333]">
                      {formatCurrency(item.product.price * item.quantity)}
                    </strong>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-xl border border-[#E0E0E0] bg-white p-5 shadow-md">
            <h2 className="mb-3 text-xl font-bold text-[#333]">Cupom</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                placeholder="FUFUNI10"
                className="min-w-0 flex-1 rounded-lg border border-[#CCC] px-3 py-2"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="rounded-lg bg-[#FF6500] px-4 py-2 font-bold text-white"
              >
                Aplicar
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-[#E0E0E0] bg-white p-5 shadow-md">
            <h2 className="mb-3 text-xl font-bold text-[#333]">Pagamento</h2>
            <div className="space-y-2">
              {[
                ['pix', 'Pix'],
                ['credit', 'Cartao'],
                ['boleto', 'Boleto'],
              ].map(([value, label]) => (
                <label key={value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={paymentMethod === value}
                    onChange={(event) =>
                      setPaymentMethod(event.target.value as PaymentMethod)
                    }
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-xl border border-[#E0E0E0] bg-[#F8F9FA] p-5 shadow-md">
          <h2 className="mb-4 text-xl font-bold text-[#333]">Resumo</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>

            <div className="flex justify-between text-green-700">
              <span>Desconto</span>
              <strong>- {formatCurrency(discount)}</strong>
            </div>

            <hr />

            <div className="flex justify-between text-lg">
              <span>Total</span>
              <strong className="text-[#0054A6]">{formatCurrency(total)}</strong>
            </div>

            <p className="text-sm text-[#666]">Pagamento: {paymentMethod}</p>
          </div>

          <button
            type="button"
            onClick={finishOrder}
            className="mt-6 w-full rounded-lg bg-[#0054A6] px-4 py-3 font-bold text-white"
          >
            Finalizar
          </button>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
