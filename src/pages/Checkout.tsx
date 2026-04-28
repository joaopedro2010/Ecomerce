import { useState } from 'react';
import logo from '../../public/fufuni.png';

const ProductDetail = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cep, setCep] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [garantiaSelecionada, setGarantiaSelecionada] = useState('sem');
  const [cupomAplicado] = useState(true);
  const [quantidade, setQuantidade] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Buscando por: ${searchTerm}`);
  };

  const handleCalculateShipping = () => {
    if (cep.length === 8) {
      alert(`Calculando frete para o CEP: ${cep}`);
    } else {
      alert('Por favor, digite um CEP válido com 8 dígitos');
    }
  };

  const handleRemoveItem = () => {
    alert('Produto removido do carrinho');
  };

  const handleRemoveAll = () => {
    alert('Todos os produtos removidos');
  };

  const handleGoToPayment = () => {
    alert('Redirecionando para pagamento...');
  };

  const handleContinueShopping = () => {
    alert('Continuar comprando...');
  };

  const produto = {
    nome: 'Kit Gamer Redragon Teclado Mecânico Kumara, RGB, Switch Outemu Blue, PT + Mouse Cobra M71I, Chroma, 10000DPI, Preto - S118',
    valorOriginal: 388.22,
    valorComDesconto: 329.99,
    descontoPix: 313.49,
    economiaPix: 55.32,
    cupom: 'KITGAMERS',
    descontoCupom: 19.41,
    totalPrazo: 368.81,
    parcelas: 10,
    valorParcela: 36.88
  };

  return (
    <div {...props} className="bg-[#F5F5F5] min-h-screen font-sans">
      {/* Header Azul */}
      <div className="bg-[#0054A6] py-3">
        <header className="flex items-center justify-between gap-5 px-5 max-w-[1400px] mx-auto">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <img 
              src={logo}
              alt="Logo FuFuni"
              className="w-[50px] h-[50px] object-contain"
            />
            <h1 className="text-[28px] font-bold text-white m-0">FuFuni</h1>
          </a>

          <form onSubmit={handleSearch} className="flex-1 max-w-[600px] flex items-center bg-white rounded overflow-hidden shadow-md">
            <input 
              type="text" 
              placeholder="Buscar produtos, marcas e muito mais..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-3.5 px-5 border-none outline-none text-[15px]"
            />
            <button 
              type="submit"
              className="bg-[#FF6500] hover:bg-[#E55A00] border-none p-[14px_25px] cursor-pointer flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="bg-transparent hover:bg-white/10 border-none cursor-pointer flex items-center gap-2 text-white p-2 rounded transition-colors"
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
                  <a href="/login" className="block px-5 py-3 text-[#333] no-underline border-b border-[#F0F0F0]">Entrar / Cadastrar</a>
                  <a href="/orders" className="block px-5 py-3 text-[#333] no-underline border-b border-[#F0F0F0]">Meus Pedidos</a>
                  <a href="/wishlist" className="block px-5 py-3 text-[#333] no-underline">Lista de Desejos</a>
                </div>
              )}
            </div>

            <button 
              onClick={() => alert('Configurações')}
              className="bg-transparent hover:bg-white/10 border-none cursor-pointer flex items-center justify-center p-2 rounded transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            <button 
              onClick={() => alert('Carrinho de compras')}
              className="bg-transparent border-none cursor-pointer flex items-center justify-center p-2 rounded relative"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="absolute top-0 right-0 bg-[#FF6500] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </header>
      </div>

      {/* Menu de Categorias */}
      <div className="bg-[#003D7A] py-2">
        <div className="max-w-[1400px] mx-auto px-5 flex gap-8">
          {['TODOS OS DEPARTAMENTOS', 'HARDWARE', 'PERIFÉRICOS', 'COMPUTADORES', 'MONITORES', 'GAMER'].map((category) => (
            <a 
              key={category}
              href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
              className={`text-white text-[13px] no-underline transition-opacity hover:opacity-80 ${category === 'TODOS OS DEPARTAMENTOS' ? 'font-bold' : 'font-normal'}`}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Conteúdo do Checkout */}
      <div className="max-w-[900px] mx-auto my-8 px-5">
        {/* Cabeçalho PRODUTO E SERVIÇO */}
        <div className="bg-white rounded-xl p-[30px] mb-5 shadow-md">
          <h2 className="text-xl font-bold text-[#333] mb-5 border-b border-[#E0E0E0] pb-2.5">
            PRODUTO E SERVIÇO
          </h2>
          
          <div className="mb-4">
            <span className="text-[#666] text-sm">Vendido e entregue por: </span>
            <span className="font-bold text-[#0054A6]">FuFuni</span>
          </div>

          <div className="mb-2.5">
            <span className="font-bold text-base text-[#333]">Redragon</span>
            <h3 className="text-lg font-semibold text-[#333] my-1 leading-relaxed">
              {produto.nome}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 items-center mb-5">
            <div>
              <div className="text-sm text-[#666]">Com desconto no PIX:</div>
              <div className="text-2xl font-bold text-[#0054A6]">
                R$ {produto.valorComDesconto.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div>
              <div className="text-sm text-[#666]">Parcelado no cartão sem juros:</div>
              <div className="text-lg font-bold text-[#333]">
                R$ {produto.valorOriginal.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div className="flex gap-2 ml-auto">
              <span className="bg-[#FF6500] text-white px-2.5 py-1 rounded text-xs font-bold">
                OFERTA NINJA
              </span>
              <span className="bg-[#003D7A] text-white px-2.5 py-1 rounded text-xs font-bold">
                KITGAMERS
              </span>
            </div>
          </div>

          {/* Seção de Serviços (Garantia) */}
          <div className="border-t border-[#E0E0E0] pt-5 mb-5">
            <h4 className="text-base font-bold text-[#333] mb-4">
              SERVIÇOS
            </h4>
            <div className="bg-[#F8F9FA] p-5 rounded-lg">
              <p className="font-bold text-[15px] text-[#333] mb-4">
                GARANTIA ESTENDIDA ORIGINAL AMPLIADA
              </p>
              <div className="flex flex-col gap-2.5 mb-4">
                {[
                  { value: 'sem', label: 'Sem garantia' },
                  { value: '12', label: '12 Meses de Garantia Estendida Kabum' },
                  { value: '24', label: '24 Meses de Garantia Estendida Kabum' },
                  { value: '36', label: '36 Meses de Garantia Estendida Kabum' }
                ].map((opcao) => (
                  <label key={opcao.value} className="flex items-center gap-2.5 cursor-pointer text-sm text-[#333]">
                    <input 
                      type="radio" 
                      name="garantia" 
                      value={opcao.value} 
                      checked={garantiaSelecionada === opcao.value}
                      onChange={() => setGarantiaSelecionada(opcao.value)}
                      className="accent-[#0054A6] w-4 h-4"
                    />
                    {opcao.label}
                  </label>
                ))}
              </div>
              <p className="text-xs text-[#666] italic">
                Ao adicionar o Garantia Estendida Original Ampliada, declaro que tive acesso, li e aceito as Condições Gerais.
              </p>
            </div>
          </div>

          {/* Cupom de Desconto */}
          <div className="border-t border-[#E0E0E0] pt-5 mb-5">
            <h4 className="text-base font-bold text-[#333] mb-2.5">
              CUPOM DE DESCONTO
            </h4>
            <div className="bg-[#E8F5E9] p-4 rounded-lg flex items-center gap-2.5 border border-[#A5D6A7]">
              <span className="text-base">✅</span>
              <span className="font-bold text-[#2E7D32]">CUPOM APLICADO COM SUCESSO</span>
            </div>
          </div>

          {/* Itens do Carrinho */}
          <div className="border-t border-[#E0E0E0] pt-5 mb-5">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-base font-bold text-[#333] m-0">REMOVER TODOS OS PRODUTOS</h4>
              <button 
                onClick={handleRemoveAll}
                className="bg-transparent border-none text-red-500 cursor-pointer font-bold text-sm underline"
              >
                Remover todos
              </button>
            </div>
            
            <div className="bg-[#FAFAFA] rounded-lg p-4 flex items-center justify-between border border-[#E0E0E0]">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-[60px] h-[60px] bg-[#DDD] rounded-md flex items-center justify-center text-xs text-[#666]">
                  Img
                </div>
                <div>
                  <p className="font-semibold text-[#333] mb-1 text-sm">{produto.nome.substring(0, 50)}...</p>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm text-[#666]">Quant.</span>
                      <div className="flex items-center border border-[#CCC] rounded">
                        <button 
                          onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                          className="px-2.5 py-1 border-none bg-[#F0F0F0] cursor-pointer text-sm"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x border-[#CCC] text-sm">{quantidade}</span>
                        <button 
                          onClick={() => setQuantidade(quantidade + 1)}
                          className="px-2.5 py-1 border-none bg-[#F0F0F0] cursor-pointer text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="font-bold text-[#0054A6] text-base">
                      R$ {produto.valorComDesconto.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleRemoveItem}
                className="bg-[#FF6500] hover:bg-[#E55A00] text-white border-none py-2 px-4 rounded-md font-bold cursor-pointer transition-colors"
              >
                REMOVER
              </button>
            </div>
          </div>

          {/* Resumo */}
          <div className="border-t border-[#E0E0E0] pt-5 mb-5">
            <h4 className="text-base font-bold text-[#333] mb-4">RESUMO</h4>
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between text-[15px] text-[#333]">
                <span>Valor dos Produtos:</span>
                <span>R$ {produto.valorOriginal.toFixed(2).replace('.', ',')}</span>
              </div>
              {cupomAplicado && (
                <div className="flex justify-between text-[15px] text-[#2E7D32]">
                  <span>Cupom: {produto.cupom}</span>
                  <span>- R$ {produto.descontoCupom.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#333] border-t border-dashed border-[#CCC] pt-2.5">
                <span>Total a prazo:</span>
                <span>R$ {produto.totalPrazo.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="text-[13px] text-[#666] -mt-1">
                em até {produto.parcelas}x de R$ {produto.valorParcela.toFixed(2).replace('.', ',')} sem juros
              </div>
              <div className="flex justify-between text-[15px] text-[#0054A6] font-bold">
                <span>Valor à vista no PIX:</span>
                <span>R$ {produto.descontoPix.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="text-[13px] text-[#666]">
                (Economizo: R$ {produto.economiaPix.toFixed(2).replace('.', ',')})
              </div>
            </div>
          </div>

          {/* Entrega */}
          <div className="border-t border-[#E0E0E0] pt-5 mb-8">
            <h4 className="text-base font-bold text-[#333] mb-4">ENTREGA</h4>
            <div className="flex gap-2.5 items-center max-w-[300px]">
              <div className="flex-1">
                <label className="text-sm text-[#666] block mb-1">CEP*</label>
                <input 
                  type="text" 
                  placeholder="00000-000" 
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={9}
                  className="w-full p-3 border border-[#CCC] rounded-lg text-sm box-border"
                />
              </div>
              <button 
                onClick={handleCalculateShipping}
                className="px-6 py-3 bg-[#0054A6] hover:bg-[#003D7A] text-white border-none rounded-lg font-bold cursor-pointer mt-[22px] transition-colors"
              >
                OK
              </button>
            </div>
            <a 
              href="https://buscacepinter.correios.com.br" 
              target="_blank" 
              className="text-[#0054A6] text-xs no-underline inline-block mt-2"
            >
              Não lembro meu CEP
            </a>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-5 justify-end border-t border-[#E0E0E0] pt-6">
            <button 
              onClick={handleContinueShopping}
              className="py-4 px-8 bg-[#F0F0F0] hover:bg-[#E0E0E0] text-[#333] border border-[#CCC] rounded-lg font-bold cursor-pointer text-base transition-colors"
            >
              CONTINUAR COMPRANDO
            </button>
            <button 
              onClick={handleGoToPayment}
              className="py-4 px-10 bg-[#FF6500] hover:bg-[#E55A00] hover:-translate-y-px text-white border-none rounded-lg font-bold cursor-pointer text-base shadow-lg shadow-[#FF6500]/30 transition-all"
            >
              IR PARA O PAGAMENTO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
