import { useState } from 'react';

const ProductDetail = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [cep, setCep] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Buscando por: ${searchTerm}`);
    // Aqui você pode implementar a navegação ou filtro real
  };

  const handleCalculateShipping = () => {
    if (cep.length === 8) {
      alert(`Calculando frete para o CEP: ${cep}`);
      // Aqui você pode fazer uma chamada API real
    } else {
      alert('Por favor, digite um CEP válido com 8 dígitos');
    }
  };

  // Simulando imagens do produto (substitua por imagens reais)
  const productImages = [
    'https://via.placeholder.com/800x800/0054A6/FFFFFF?text=Produto+Principal',
    'https://via.placeholder.com/800x800/003D7A/FFFFFF?text=Angulo+2',
    'https://via.placeholder.com/800x800/002D5A/FFFFFF?text=Angulo+3',
    'https://via.placeholder.com/800x800/001D4A/FFFFFF?text=Detalhe'
  ];

  return (
    <div {...props} style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Azul Funcional */}
      <div style={{ backgroundColor: '#0054A6', padding: '12px 0' }}>
        <header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '20px', 
          padding: '0 20px', 
          maxWidth: '1400px', 
          margin: '0 auto' 
        }}>
          {/* Logo clicável */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF8YkrnJ6porS4ntTa0MJmS_PnRnTa2o3Fg&s" 
              alt="Logo FuFuni"
              style={{ width: '50px', height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFFFFF', margin: 0 }}>FuFuni</h1>
          </a>

          {/* Barra de Pesquisa Funcional */}
          <form onSubmit={handleSearch} style={{ 
            flex: 1, 
            maxWidth: '600px',
            display: 'flex',
            alignItems: 'center',
            background: '#FFFFFF',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <input 
              type="text" 
              placeholder="Buscar produtos, marcas e muito mais..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                flex: 1,
                padding: '14px 20px',
                border: 'none',
                outline: 'none',
                fontSize: '15px'
              }} 
            />
            <button 
              type="submit"
              style={{ 
                background: '#FF6500',
                border: 'none',
                padding: '14px 25px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#E55A00'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#FF6500'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

          {/* Ícones de Usuário e Configurações Funcionais */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Ícone de Usuário com Menu Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFFFFF',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span style={{ fontSize: '14px' }}>Minha Conta</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  minWidth: '200px',
                  zIndex: 1000,
                  overflow: 'hidden'
                }}>
                  <a href="/login" style={{ display: 'block', padding: '12px 20px', color: '#333', textDecoration: 'none', borderBottom: '1px solid #F0F0F0' }}>
                    Entrar / Cadastrar
                  </a>
                  <a href="/orders" style={{ display: 'block', padding: '12px 20px', color: '#333', textDecoration: 'none', borderBottom: '1px solid #F0F0F0' }}>
                    Meus Pedidos
                  </a>
                  <a href="/wishlist" style={{ display: 'block', padding: '12px 20px', color: '#333', textDecoration: 'none' }}>
                    Lista de Desejos
                  </a>
                </div>
              )}
            </div>

            {/* Ícone de Configurações */}
            <button 
              onClick={() => alert('Configurações')}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '4px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>

            {/* Carrinho */}
            <button 
              onClick={() => alert('Carrinho de compras')}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '4px',
                position: 'relative'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: '#FF6500',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: 'bold',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>0</span>
            </button>
          </div>
        </header>
      </div>

      {/* Menu de Categorias */}
      <div style={{ backgroundColor: '#003D7A', padding: '8px 0' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'flex',
          gap: '30px'
        }}>
          {['TODOS OS DEPARTAMENTOS', 'HARDWARE', 'PERIFÉRICOS', 'COMPUTADORES', 'MONITORES', 'GAMER'].map((category) => (
            <a 
              key={category}
              href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
              style={{ 
                color: '#FFFFFF', 
                fontSize: '13px', 
                fontWeight: category === 'TODOS OS DEPARTAMENTOS' ? 'bold' : 'normal',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
          <a href="/" style={{ color: '#0054A6', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <a href="/hardware" style={{ color: '#0054A6', textDecoration: 'none' }}>Hardware</a>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <a href="/hardware/placas-de-video" style={{ color: '#0054A6', textDecoration: 'none' }}>Placas de Vídeo</a>
          <span style={{ margin: '0 8px', color: '#999' }}>›</span>
          <span style={{ color: '#666' }}>NVIDIA GeForce</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '30px', marginBottom: '40px' }}>
          {/* Coluna Esquerda - Galeria MAIOR */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Imagem Principal Grande */}
            <div style={{ 
              border: '1px solid #E0E0E0', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              background: '#FAFAFA',
              position: 'relative',
              cursor: 'zoom-in'
            }}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh-9TjFWygGftURFCV5XVbj7Gh5uEF-gBOw&s"
                alt="Produto"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onClick={() => alert('Zoom na imagem')}
              />
              {/* Badge de desconto */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: '#FF6500',
                color: '#FFFFFF',
                padding: '5px 10px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                -15%
              </div>
            </div>

            {/* Miniaturas */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    border: selectedImage === index ? '2px solid #0054A6' : '1px solid #E0E0E0', 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    opacity: selectedImage === index ? '1' : '0.7'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedImage !== index) {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.borderColor = '#0054A6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedImage !== index) {
                      e.currentTarget.style.opacity = '0.7';
                      e.currentTarget.style.borderColor = '#E0E0E0';
                    }
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Produto ${index + 1}`}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Central - Informações */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#333333', lineHeight: '1.3' }}>
              Placa de Vídeo NVIDIA GeForce RTX 4070 Super Windforce, 12GB GDDR6X, DLSS 3.0, Ray Tracing
            </h2>
            
            <div style={{ color: '#666666', fontSize: '14px' }}>
              Código: <span style={{ fontWeight: 'bold', color: '#333' }}>RTX4070-SUPER-WF</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: '#FFB300', fontSize: '20px' }}>
                ★★★★☆
              </div>
              <span style={{ color: '#0054A6', fontSize: '14px' }}>(128 avaliações)</span>
            </div>

            {/* Preço */}
            <div style={{ background: '#F8F9FA', padding: '25px', borderRadius: '12px' }}>
              <div style={{ color: '#999999', textDecoration: 'line-through', fontSize: '16px', marginBottom: '8px' }}>
                De: R$ 3.999,90
              </div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0054A6', marginBottom: '8px' }}>
                R$ 3.399,90
              </div>
              <div style={{ color: '#333333', fontSize: '18px', marginBottom: '15px' }}>
                12x de R$ 283,32 sem juros
              </div>
              <div style={{ paddingTop: '15px', borderTop: '1px solid #E0E0E0', color: '#666666', display: 'flex', gap: '10px' }}>
                <span>💰 Pix: -5%</span>
                <span>💳 Cartão</span>
                <span>📄 Boleto</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Produto adicionado ao carrinho!')}
              style={{ 
                background: '#0054A6', 
                color: 'white', 
                border: 'none', 
                padding: '18px', 
                borderRadius: '12px', 
                fontSize: '20px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                transition: 'background 0.3s, transform 0.1s',
                boxShadow: '0 4px 15px rgba(0,84,166,0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#003D7A';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0054A6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              COMPRAR AGORA
            </button>

            <div style={{ display: 'flex', gap: '20px', marginTop: '10px', color: '#666666', fontSize: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
                   onClick={() => alert('Calcular frete')}>
                📦 Calcular Frete
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
                   onClick={() => alert('Garantia estendida')}>
                🛡️ Garantia Estendida
              </div>
            </div>
          </div>

          {/* Coluna Direita - Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#F8F9FA', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '14px', color: '#666666', marginBottom: '10px' }}>Vendido e entregue por</h3>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', marginBottom: '15px' }}>FuFuni</div>
              <div style={{ 
                padding: '8px 12px', 
                background: '#E8F5E9', 
                color: '#2E7D32', 
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '14px',
                display: 'inline-block'
              }}>
                ✓ Em Estoque
              </div>
            </div>

            <div style={{ background: '#F8F9FA', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '16px', color: '#333333', marginBottom: '15px' }}>Calcular Frete</h3>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input 
                  type="text" 
                  placeholder="Digite seu CEP" 
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={8}
                  style={{ 
                    flex: 1, 
                    padding: '12px', 
                    border: '1px solid #CCCCCC', 
                    borderRadius: '8px', 
                    fontSize: '14px' 
                  }} 
                />
                <button 
                  onClick={handleCalculateShipping}
                  style={{ 
                    padding: '12px 20px', 
                    background: '#0054A6', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#003D7A'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#0054A6'}
                >
                  OK
                </button>
              </div>
              <a href="https://buscacepinter.correios.com.br" target="_blank" style={{ color: '#0054A6', fontSize: '12px', textDecoration: 'none' }}>
                Não sei meu CEP
              </a>
            </div>
          </div>
        </div>

        {/* Abas Funcionais */}
        <div style={{ display: 'flex', borderBottom: '2px solid #E0E0E0', marginBottom: '30px' }}>
          <button 
            onClick={() => setActiveTab('description')}
            style={{ 
              padding: '15px 30px', 
              background: 'none', 
              border: 'none', 
              fontSize: '16px', 
              color: activeTab === 'description' ? '#0054A6' : '#666666', 
              cursor: 'pointer',
              position: 'relative',
              fontWeight: activeTab === 'description' ? 'bold' : 'normal',
              borderBottom: activeTab === 'description' ? '2px solid #0054A6' : 'none',
              marginBottom: '-2px'
            }}
          >
            Descrição
          </button>
          <button 
            onClick={() => setActiveTab('specs')}
            style={{ 
              padding: '15px 30px', 
              background: 'none', 
              border: 'none', 
              fontSize: '16px', 
              color: activeTab === 'specs' ? '#0054A6' : '#666666', 
              cursor: 'pointer',
              fontWeight: activeTab === 'specs' ? 'bold' : 'normal',
              borderBottom: activeTab === 'specs' ? '2px solid #0054A6' : 'none',
              marginBottom: '-2px'
            }}
          >
            Especificações Técnicas
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            style={{ 
              padding: '15px 30px', 
              background: 'none', 
              border: 'none', 
              fontSize: '16px', 
              color: activeTab === 'reviews' ? '#0054A6' : '#666666', 
              cursor: 'pointer',
              fontWeight: activeTab === 'reviews' ? 'bold' : 'normal',
              borderBottom: activeTab === 'reviews' ? '2px solid #0054A6' : 'none',
              marginBottom: '-2px'
            }}
          >
            Avaliações
          </button>
        </div>

        {/* Conteúdo das Abas */}
        {activeTab === 'description' && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', color: '#333333', marginBottom: '20px' }}>Descrição do Produto</h2>
            <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
              A Placa de Vídeo NVIDIA GeForce RTX 4070 Super é a escolha definitiva para gamers e criadores de conteúdo que buscam performance excepcional. 
              Equipada com a arquitetura Ada Lovelace, 12GB de memória GDDR6X e tecnologias como DLSS 3.0 e Ray Tracing, ela oferece gráficos 
              impressionantes e taxas de quadros ultra-elevadas em resolução 4K.
            </p>
            
            <h3 style={{ fontSize: '18px', color: '#333333', marginBottom: '15px' }}>Principais Características:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Arquitetura NVIDIA Ada Lovelace',
                '12GB GDDR6X de memória',
                'DLSS 3.0 para performance otimizada',
                'Ray Tracing para gráficos realistas',
                'Windforce Cooling System',
                'RGB Fusion 2.0'
              ].map((feature, index) => (
                <li key={index} style={{ padding: '8px 0', color: '#666666', fontSize: '15px' }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'specs' && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', color: '#333333', marginBottom: '20px' }}>Especificações Técnicas</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FAFAFA', borderRadius: '12px', overflow: 'hidden' }}>
              <tbody>
                {[
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
                ].map(([label, value], index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? '#FFFFFF' : '#F5F5F5' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 600, color: '#333333', width: '40%' }}>{label}</td>
                    <td style={{ padding: '12px 20px', color: '#666666' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', color: '#333333', marginBottom: '20px' }}>Avaliações dos Clientes</h2>
            <div style={{ background: '#F8F9FA', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>⭐</div>
              <p style={{ fontSize: '18px', color: '#666' }}>Nenhuma avaliação ainda.</p>
              <p style={{ color: '#999', marginBottom: '20px' }}>Seja o primeiro a avaliar este produto!</p>
              <button 
                onClick={() => alert('Avaliar produto')}
                style={{
                  background: '#0054A6',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Avaliar Produto
              </button>
            </div>
          </div>
        )}

        {/* Produtos Relacionados */}
        <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '2px solid #F0F0F0' }}>
          <h2 style={{ fontSize: '22px', color: '#333333', marginBottom: '25px' }}>Quem viu este produto também viu</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { name: 'RTX 4060 Ti', price: '2.599,90' },
              { name: 'RTX 4080 Super', price: '5.999,90' },
              { name: 'RX 7800 XT', price: '3.299,90' },
              { name: 'RTX 4090', price: '10.999,90' }
            ].map((product, index) => (
              <div key={index} style={{ 
                border: '1px solid #E0E0E0', 
                borderRadius: '12px', 
                padding: '20px', 
                textAlign: 'center', 
                cursor: 'pointer',
                transition: 'box-shadow 0.3s, transform 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <img 
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh-9TjFWygGftURFCV5XVbj7Gh5uEF-gBOw&s=${product.name}`}
                  alt={product.name}
                  style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
                />
                <div style={{ fontSize: '14px', color: '#333333', marginBottom: '8px', fontWeight: 500 }}>{product.name}</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0054A6' }}>R$ {product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;