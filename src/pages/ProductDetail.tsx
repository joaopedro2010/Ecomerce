import { useState } from 'react';

const ProductDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [cep, setCep] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

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

  const productImages = [
    'https://via.placeholder.com/800x800/0054A6/FFFFFF?text=Produto+Principal',
    'https://via.placeholder.com/800x800/003D7A/FFFFFF?text=Angulo+2',
    'https://via.placeholder.com/800x800/002D5A/FFFFFF?text=Angulo+3',
    'https://via.placeholder.com/800x800/001D4A/FFFFFF?text=Detalhe'
  ];

  const menuCategories = ['TODOS OS DEPARTAMENTOS', 'HARDWARE', 'PERIFÉRICOS', 'COMPUTADORES', 'MONITORES', 'GAMER'];
  
  const specsData = [
    ['Marca', 'NVIDIA'],
    ['Modelo', 'GeForce RTX 4070 Super'],
    ['Memória', '12GB GDDR6X'],
    ['Interface', 'PCI Express 4.0 x16'],
    ['Clock Base', '1980 MHz'],
    ['Clock Boost', '2505 MHz'],
    ['CUDA Cores', '7168'],
    ['Ray Tracing Cores', '3ª Geração'],
    ['Tensor Cores', '4ª Geração'],
    ['Resolução Máxima', '7680 x 4320 (8K)'],
    ['Conexões', '3x DisplayPort 1.4a, 1x HDMI 2.1a'],
    ['Fonte Recomendada', '650W'],
    ['Dimensões', '261 x 126 x 50 mm']
  ];

  const relatedProducts = [
    { name: 'RTX 4060 Ti', price: '2.599,90' },
    { name: 'RTX 4080 Super', price: '5.999,90' },
    { name: 'RX 7800 XT', price: '3.299,90' },
    { name: 'RTX 4090', price: '10.999,90' }
  ];

  const features = [
    'Arquitetura NVIDIA Ada Lovelace',
    '12GB GDDR6X de memória',
    'DLSS 3.0 para performance otimizada',
    'Ray Tracing para gráficos realistas',
    'Windforce Cooling System',
    'RGB Fusion 2.0'
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Azul */}
      <div className="bg-[#0054A6] py-3">
        <header className="flex items-center justify-between gap-5 px-5 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF8YkrnJ6porS4ntTa0MJmS_PnRnTa2o3Fg&s" 
              alt="Logo FuFuni"
              className="w-[50px] h-[50px] object-contain brightness-0 invert"
            />
            <h1 className="text-[28px] font-bold text-white m-0">FuFuni</h1>
          </a>

          {/* Barra de Pesquisa */}
          <form onSubmit={handleSearch} className="flex-1 max-w-[600px] flex items-center bg-white rounded overflow-hidden shadow-sm">
            <input 
              type="text" 
              placeholder="Buscar produtos, marcas e muito mais..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-3.5 px-5 border-none outline-none text-[15px]"
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

          {/* Ícones de Usuário e Configurações */}
          <div className="flex items-center gap-[15px]">
            {/* Menu Dropdown Usuário */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="bg-transparent border-none cursor-pointer flex items-center gap-2 text-white py-2 px-3 rounded transition-colors hover:bg-white/10"
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
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl min-w-[200px] z-[1000] overflow-hidden">
                  <a href="/login" className="block px-5 py-3 text-[#333] no-underline border-b border-[#F0F0F0] hover:bg-gray-50">
                    Entrar / Cadastrar
                  </a>
                  <a href="/orders" className="block px-5 py-3 text-[#333] no-underline border-b border-[#F0F0F0] hover:bg-gray-50">
                    Meus Pedidos
                  </a>
                  <a href="/wishlist" className="block px-5 py-3 text-[#333] no-underline hover:bg-gray-50">
                    Lista de Desejos
                  </a>
                </div>
              )}
            </div>

            {/* Configurações */}
            <button 
              onClick={() => alert('Configurações')}
              className="bg-transparent border-none cursor-pointer flex items-center justify-center p-2 rounded transition-colors hover:bg-white/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            {/* Carrinho */}
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
                0
              </span>
            </button>
          </div>
        </header>
      </div>

      {/* Menu de Categorias */}
      <div className="bg-[#003D7A] py-2">
        <div className="max-w-[1400px] mx-auto px-5 flex gap-[30px]">
          {menuCategories.map((category) => (
            <a 
              key={category}
              href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
              className={`text-white text-[13px] cursor-pointer no-underline transition-opacity hover:opacity-80 ${category === 'TODOS OS DEPARTAMENTOS' ? 'font-bold' : 'font-normal'}`}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-[1400px] mx-auto p-5">
        {/* Breadcrumb */}
        <div className="mb-5 text-[#666] text-sm">
          <a href="/" className="text-[#0054A6] no-underline">Home</a>
          <span className="mx-2 text-[#999]">›</span>
          <a href="/hardware" className="text-[#0054A6] no-underline">Hardware</a>
          <span className="mx-2 text-[#999]">›</span>
          <a href="/hardware/placas-de-video" className="text-[#0054A6] no-underline">Placas de Vídeo</a>
          <span className="mx-2 text-[#999]">›</span>
          <span className="text-[#666]">NVIDIA GeForce</span>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-[1.2fr_1fr_0.8fr] gap-[30px] mb-10">
          {/* Coluna Esquerda - Galeria */}
          <div className="flex flex-col gap-[15px]">
            {/* Imagem Principal */}
            <div className="border border-[#E0E0E0] rounded-xl overflow-hidden bg-[#FAFAFA] relative cursor-zoom-in">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh-9TjFWygGftURFCV5XVbj7Gh5uEF-gBOw&s"
                alt="Produto"
                className="w-full aspect-square object-cover block"
                onClick={() => alert('Zoom na imagem')}
              />
              <div className="absolute top-[15px] left-[15px] bg-[#FF6500] text-white px-2.5 py-1.5 rounded font-bold text-sm">
                -15%
              </div>
            </div>

            {/* Miniaturas */}
            <div className="flex gap-2.5 justify-center">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedImage === index 
                      ? 'border-2 border-[#0054A6] opacity-100' 
                      : 'border border-[#E0E0E0] opacity-70 hover:opacity-100 hover:border-[#0054A6]'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Produto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Central - Informações */}
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-2xl font-semibold text-[#333] leading-tight">
              Placa de Vídeo NVIDIA GeForce RTX 4070 Super Windforce, 12GB GDDR6X, DLSS 3.0, Ray Tracing
            </h2>
            
            <div className="text-[#666] text-sm">
              Código: <span className="font-bold text-[#333]">RTX4070-SUPER-WF</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="text-[#FFB300] text-xl">★★★★☆</div>
              <span className="text-[#0054A6] text-sm">(128 avaliações)</span>
            </div>

            {/* Preço */}
            <div className="bg-[#F8F9FA] p-6 rounded-xl">
              <div className="text-[#999] line-through text-base mb-2">
                De: R$ 3.999,90
              </div>
              <div className="text-4xl font-bold text-[#0054A6] mb-2">
                R$ 3.399,90
              </div>
              <div className="text-[#333] text-lg mb-4">
                12x de R$ 283,32 sem juros
              </div>
              <div className="pt-4 border-t border-[#E0E0E0] text-[#666] flex gap-2.5">
                <span>💰 Pix: -5%</span>
                <span>💳 Cartão</span>
                <span>📄 Boleto</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Produto adicionado ao carrinho!')}
              className="bg-[#0054A6] text-white border-none py-[18px] rounded-xl text-xl font-bold cursor-pointer transition-all hover:bg-[#003D7A] hover:-translate-y-px shadow-[0_4px_15px_rgba(0,84,166,0.3)]"
            >
              COMPRAR AGORA
            </button>

            <div className="flex gap-5 mt-2.5 text-[#666] text-sm">
              <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => alert('Calcular frete')}>
                📦 Calcular Frete
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => alert('Garantia estendida')}>
                🛡️ Garantia Estendida
              </div>
            </div>
          </div>

          {/* Coluna Direita - Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#F8F9FA] p-5 rounded-xl">
              <h3 className="text-sm text-[#666] mb-2.5">Vendido e entregue por</h3>
              <div className="text-lg font-bold text-[#333] mb-4">FuFuni</div>
              <div className="inline-block px-3 py-2 bg-[#E8F5E9] text-[#2E7D32] rounded-lg font-bold text-sm">
                ✓ Em Estoque
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-5 rounded-xl">
              <h3 className="text-base text-[#333] mb-4">Calcular Frete</h3>
              <div className="flex gap-2.5 mb-2.5">
                <input 
                  type="text" 
                  placeholder="Digite seu CEP" 
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={8}
                  className="flex-1 p-3 border border-[#CCC] rounded-lg text-sm"
                />
                <button 
                  onClick={handleCalculateShipping}
                  className="px-5 py-3 bg-[#0054A6] text-white border-none rounded-lg cursor-pointer font-bold transition-colors hover:bg-[#003D7A]"
                >
                  OK
                </button>
              </div>
              <a href="https://buscacepinter.correios.com.br" target="_blank" className="text-[#0054A6] text-xs no-underline">
                Não sei meu CEP
              </a>
            </div>
          </div>
        </div>

        {/* Abas */}
        <div className="flex border-b-2 border-[#E0E0E0] mb-[30px]">
          <button 
            onClick={() => setActiveTab('description')}
            className={`px-[30px] py-[15px] bg-transparent border-none text-base cursor-pointer relative -mb-[2px] ${
              activeTab === 'description' 
                ? 'text-[#0054A6] font-bold border-b-2 border-[#0054A6]' 
                : 'text-[#666] font-normal'
            }`}
          >
            Descrição
          </button>
          <button 
            onClick={() => setActiveTab('specs')}
            className={`px-[30px] py-[15px] bg-transparent border-none text-base cursor-pointer -mb-[2px] ${
              activeTab === 'specs' 
                ? 'text-[#0054A6] font-bold border-b-2 border-[#0054A6]' 
                : 'text-[#666] font-normal'
            }`}
          >
            Especificações Técnicas
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`px-[30px] py-[15px] bg-transparent border-none text-base cursor-pointer -mb-[2px] ${
              activeTab === 'reviews' 
                ? 'text-[#0054A6] font-bold border-b-2 border-[#0054A6]' 
                : 'text-[#666] font-normal'
            }`}
          >
            Avaliações
          </button>
        </div>

        {/* Conteúdo das Abas */}
        {activeTab === 'description' && (
          <div className="mb-10">
            <h2 className="text-xl text-[#333] mb-5">Descrição do Produto</h2>
            <p className="leading-relaxed text-[#666] mb-5">
              A Placa de Vídeo NVIDIA GeForce RTX 4070 Super é a escolha definitiva para gamers e criadores de conteúdo que buscam performance excepcional. 
              Equipada com a arquitetura Ada Lovelace, 12GB de memória GDDR6X e tecnologias como DLSS 3.0 e Ray Tracing, ela oferece gráficos 
              impressionantes e taxas de quadros ultra-elevadas em resolução 4K.
            </p>
            
            <h3 className="text-lg text-[#333] mb-4">Principais Características:</h3>
            <ul className="list-none p-0">
              {features.map((feature, index) => (
                <li key={index} className="py-2 text-[#666] text-[15px]">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="mb-10">
            <h2 className="text-xl text-[#333] mb-5">Especificações Técnicas</h2>
            <table className="w-full border-collapse bg-[#FAFAFA] rounded-xl overflow-hidden">
              <tbody>
                {specsData.map(([label, value], index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}>
                    <td className="py-3 px-5 font-semibold text-[#333] w-[40%]">{label}</td>
                    <td className="py-3 px-5 text-[#666]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="mb-10">
            <h2 className="text-xl text-[#333] mb-5">Avaliações dos Clientes</h2>
            <div className="bg-[#F8F9FA] p-[30px] rounded-xl text-center">
              <div className="text-5xl mb-2.5">⭐</div>
              <p className="text-lg text-[#666]">Nenhuma avaliação ainda.</p>
              <p className="text-[#999] mb-5">Seja o primeiro a avaliar este produto!</p>
              <button 
                onClick={() => alert('Avaliar produto')}
                className="bg-[#0054A6] text-white border-none px-[30px] py-3 rounded-lg cursor-pointer font-bold hover:bg-[#003D7A]"
              >
                Avaliar Produto
              </button>
            </div>
          </div>
        )}

        {/* Produtos Relacionados */}
        <div className="mt-10 pt-10 border-t-2 border-[#F0F0F0]">
          <h2 className="text-[22px] text-[#333] mb-6">Quem viu este produto também viu</h2>
          <div className="grid grid-cols-4 gap-5">
            {relatedProducts.map((product, index) => (
              <div 
                key={index} 
                className="border border-[#E0E0E0] rounded-xl p-5 text-center cursor-pointer transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <img 
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh-9TjFWygGftURFCV5XVbj7Gh5uEF-gBOw&s=${product.name}`}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div className="text-sm text-[#333] mb-2 font-medium">{product.name}</div>
                <div className="text-lg font-bold text-[#0054A6]">R$ {product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;