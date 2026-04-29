import { useState } from 'react';

const Checkout = () => {
// ==================== ESTADOS ====================
// Carrinho começa vazio - será preenchido via props/contexto
const [cartItems, setCartItems] = useState([]);
  // Cupom
  const [couponInput, setCouponInput] = useState('');
  const [couponApplied, setCouponApplied] = useState(null); // { code, discount }
  const [couponError, setCouponError] = useState('');

  // Garantia estendida
  const [warranty, setWarranty] = useState('none'); // 'none' | '12' | '24' | '36'

  // CEP
  const [cep, setCep] = useState('');

  // Estados da UI
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  // ==================== CÁLCULOS ====================
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Desconto do cupom (15% sobre o subtotal, por exemplo)
  const cupomDiscount = couponApplied ? subtotal * couponApplied.discount : 0;

  // Valor da garantia estendida
  const warrantyPrices = {
    none: 0,
    '12': 49.90,
    '24': 79.90,
    '36': 99.90,
  };
  const warrantyCost = warrantyPrices[warranty];

  // Total a prazo (antes do desconto PIX)
  const totalPrazo = subtotal - cupomDiscount + warrantyCost;

  // Valor à vista no PIX (5% de desconto sobre o total a prazo)
  const pixDiscount = totalPrazo * 0.05;
  const totalPix = totalPrazo - pixDiscount;

  // ==================== HANDLERS ====================
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    // Simulação de cupom válido
    if (couponInput.toUpperCase() === 'KITGAMERS') {
      setCouponApplied({ code: 'KITGAMERS', discount: 0.05 }); // 5% de desconto
      setCouponError('');
    } else {
      setCouponApplied(null);
      setCouponError('Cupom inválido ou expirado.');
    }
  };

  const removeCoupon = () => {
    setCouponApplied(null);
    setCouponInput('');
    setCouponError('');
  };

  const handleCalculateShipping = () => {
    if (cep.length === 8) {
      alert(`Frete calculado para o CEP ${cep}: R$ 22,90`);
    } else {
      alert('Digite um CEP válido com 8 dígitos.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando por: ${searchTerm}`);
  };

  const finalizePurchase = () => {
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    alert('Compra finalizada com sucesso! (simulação)');
    // Aqui você pode redirecionar para página de sucesso
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ========== HEADER AZUL ========== */}
      <div className="bg-[#0054A6]">
        <header className="flex items-center justify-between gap-5 px-5 max-w-[1400px] mx-auto py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 text-white no-underline">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF8YkrnJ6porS4ntTa0MJmS_PnRnTa2o3Fg&s"
              alt="Logo FuFuni"
              className="w-[50px] h-[50px] object-contain brightness-0 invert"
            />
            <h1 className="text-2xl font-bold">FuFuni</h1>
          </a>

          {/* Busca */}
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-[600px] flex items-center bg-white rounded overflow-hidden shadow"
          >
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-3.5 px-5 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#FF6500] border-none py-3.5 px-6 cursor-pointer flex items-center justify-center transition-colors hover:bg-[#E55A00]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

          {/* Ícones de usuário e carrinho */}
          <div className="flex items-center gap-4">
            {/* Menu usuário */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 text-white bg-transparent border-none cursor-pointer py-2 px-3 rounded transition-colors hover:bg-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-sm">Minha Conta</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {showUserMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl min-w-[200px] z-50 overflow-hidden">
                  <a href="/login" className="block px-5 py-3 text-gray-700 no-underline border-b border-gray-100 hover:bg-gray-50">
                    Entrar / Cadastrar
                  </a>
                  <a href="/orders" className="block px-5 py-3 text-gray-700 no-underline border-b border-gray-100 hover:bg-gray-50">
                    Meus Pedidos
                  </a>
                  <a href="/wishlist" className="block px-5 py-3 text-gray-700 no-underline hover:bg-gray-50">
                    Lista de Desejos
                  </a>
                </div>
              )}
            </div>

            {/* Carrinho */}
            <button
              onClick={() => alert('Carrinho de compras')}
              className="relative bg-transparent border-none cursor-pointer p-2 rounded transition-colors hover:bg-white/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 bg-[#FF6500] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </button>
          </div>
        </header>
      </div>

      {/* ========== MENU DE CATEGORIAS ========== */}
      <div className="bg-[#003D7A]">
        <div className="max-w-[1400px] mx-auto px-5 py-2 flex gap-8">
          {['TODOS OS DEPARTAMENTOS', 'HARDWARE', 'PERIFÉRICOS', 'COMPUTADORES', 'MONITORES', 'GAMER'].map((category) => (
            <a
              key={category}
              href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
              className={`text-white text-[13px] no-underline transition-opacity hover:opacity-80 ${
                category === 'TODOS OS DEPARTAMENTOS' ? 'font-bold' : ''
              }`}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* ========== CONTEÚDO PRINCIPAL - CHECKOUT ========== */}
      <main className="max-w-[1000px] mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Checkout</h1>

        {/* Grade de duas colunas: esquerda (itens/serviços) e direita (resumo) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ===== COLUNA ESQUERDA (2/3) ===== */}
          <div className="lg:col-span-2 space-y-6">
            {/* --- Produto(s) no carrinho --- */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Produto e Serviço</h2>
              <p className="text-sm text-gray-500 mb-4">Vendido e entregue por: <strong>FuFuni</strong></p>

              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  Seu carrinho está vazio.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-800 leading-tight">{item.name}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-base font-bold text-[#0054A6]">
                          R$ {item.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">Quant.: {item.quantity}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}

              {/* OFERTA NINJA (apenas decorativa) */}
              {cartItems.length > 0 && (
                <div className="mt-4 inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                  OFERTA NINJA
                </div>
              )}
            </section>

            {/* --- Garantia Estendida --- */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Serviços</h2>
              <p className="text-sm font-medium text-gray-700 mb-3">Garantia Estendida Original Ampliada</p>
              <div className="space-y-3">
                {[
                  { value: 'none', label: 'Sem garantia', price: 0 },
                  { value: '12', label: '12 Meses de Garantia Estendida Kabum', price: 49.90 },
                  { value: '24', label: '24 Meses de Garantia Estendida Kabum', price: 79.90 },
                  { value: '36', label: '36 Meses de Garantia Estendida Kabum', price: 99.90 },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      warranty === option.value
                        ? 'border-[#0054A6] bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="warranty"
                      value={option.value}
                      checked={warranty === option.value}
                      onChange={(e) => setWarranty(e.target.value)}
                      className="accent-[#0054A6]"
                    />
                    <span className="flex-1 text-sm text-gray-700">{option.label}</span>
                    {option.price > 0 && (
                      <span className="text-sm font-bold text-gray-800">+ R$ {option.price.toFixed(2)}</span>
                    )}
                  </label>
                ))}
                <p className="text-xs text-gray-400 mt-2">
                  Ao adicionar o Garantia Estendida Original Ampliada, declaro que tive acesso, li e aceito as Condições Gerais.
                </p>
              </div>
            </section>

            {/* --- Cupom de desconto --- */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Cupom de Desconto</h2>
              {couponApplied ? (
                <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                  <span className="text-sm text-green-700">
                    Cupom <strong>{couponApplied.code}</strong> aplicado! (-{(couponApplied.discount * 100).toFixed(0)}%)
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remover
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Código do cupom"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0054A6]"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-[#FF6500] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E55A00] transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
              )}
              {couponError && (
                <p className="text-xs text-red-500 mt-2">{couponError}</p>
              )}
              <p className="text-xs text-gray-400 mt-3">
                * Use o cupom <strong>KITGAMERS</strong> para 5% de desconto.
              </p>
            </section>

            {/* --- Remover todos --- */}
            {cartItems.length > 0 && (
              <button
                onClick={() => setCartItems([])}
                className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Remover todos os produtos
              </button>
            )}
          </div>

          {/* ===== COLUNA DIREITA (1/3) - RESUMO ===== */}
          <div className="space-y-6">
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumo</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor dos Produtos:</span>
                  <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Cupom: {couponApplied.code}</span>
                    <span>- R$ {cupomDiscount.toFixed(2)}</span>
                  </div>
                )}

                {warranty !== 'none' && (
                  <div className="flex justify-between text-gray-600">
                    <span>Garantia Estendida:</span>
                    <span>+ R$ {warrantyCost.toFixed(2)}</span>
                  </div>
                )}

                <hr className="border-gray-200" />

                <div className="flex justify-between text-base font-bold">
                  <span className="text-gray-800">Total a prazo:</span>
                  <span className="text-[#0054A6]">R$ {totalPrazo.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 text-right">
                  em até 10x de R$ {(totalPrazo / 10).toFixed(2)} sem juros
                </p>

                <div className="flex justify-between text-sm bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-gray-700">Valor à vista no PIX:</span>
                  <span className="font-bold text-green-600">R$ {totalPix.toFixed(2)}</span>
                </div>
                <p className="text-xs text-green-600 text-right">
                  Economize: R$ {pixDiscount.toFixed(2)}
                </p>
              </div>

              {/* Entrega */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Entrega</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={8}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0054A6]"
                  />
                  <button
                    onClick={handleCalculateShipping}
                    className="bg-[#0054A6] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#003D7A] transition-colors"
                  >
                    OK
                  </button>
                </div>
                <a
                  href="https://buscacepinter.correios.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0054A6] mt-1 inline-block hover:underline"
                >
                  Não lembro meu CEP
                </a>
              </div>

              {/* Botões de ação */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={finalizePurchase}
                  className="w-full bg-[#FF6500] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#E55A00] transition-all shadow-lg hover:shadow-xl"
                >
                  Ir para o pagamento
                </button>
                <a
                  href="/"
                  className="block text-center text-sm text-gray-500 hover:text-[#0054A6] underline"
                >
                  Continuar comprando
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;