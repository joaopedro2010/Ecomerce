import { useState } from 'react';
import { useStore } from '../hooks/useStore';

const HomePage = () => {
  const {products} =useStore()
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Buscando por: ${searchTerm}`);
  };

 const categorias = [
   {
     nome: 'Computadores',
     imagem: 'https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2023/02/computador-positivo-%C3%A9-bom.jpeg',
     link: '/categoria/computadores'
   },
   {
     nome: 'Celulares',
     imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G0NBpaVIKoLiXMGXARpAnIB5lKX2KhYkJA&s',
   },
   {
     nome: 'TVs e Projetores',
     imagem: 'https://s2-g1.glbimg.com/0pAYmpnM5v6t2OiXEYNDnmpU-vI=/0x0:1920x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/l/R/OqMyLYRkiqf3jrlBwlBw/guia-de-compras-projetoresimg-materia.jpg',
   },
   {
     nome: 'Entre Outros',
     imagem: 'https://media.istockphoto.com/id/1397047877/pt/foto/main-microchip-on-the-motherboard.jpg?s=612x612&w=0&k=20&c=nOOMv10NDgWvBF8bRKLKc4HU6s8LjHCL7VvXZZsXBQE=',
   },
 ];

  return (
    <>
      {/* Estilos para grid responsivo (mobile-first) */}
      <style>{`
        /* Categorias – mobile: 1 coluna */
        .categories-grid {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        /* Tablet: 2 colunas */
        @media (min-width: 480px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop: 4 colunas */
        @media (min-width: 768px) {
          .categories-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Produtos – mobile: 1 coluna */
        .products-grid {
          max-width: 1400px;
          margin: 30px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        /* Tablet: 2 colunas */
        @media (min-width: 480px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop: 3 colunas */
        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Desktop grande: 4 colunas */
        @media (min-width: 1100px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Estilo básico para cada produto (apenas para organizar) */
        .product-item {
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
      `}</style>

      <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
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
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF8YkrnJ6porS4ntTa0MJmS_PnRnTa2o3Fg&s"
                alt="Logo FuFuni"
                style={{ width: '50px', height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
              <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFFFFF', margin: 0 }}>FuFuni</h1>
            </a>

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
                  justifyContent: 'center'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
                    borderRadius: '4px'
                  }}
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
                    <a href="/login" style={{ display: 'block', padding: '12px 20px', color: '#333', textDecoration: 'none', borderBottom: '1px solid #F0F0F0' }}>Entrar / Cadastrar</a>
                    <a href="/orders" style={{ display: 'block', padding: '12px 20px', color: '#333', textDecoration: 'none', borderBottom: '1px solid #F0F0F0' }}>Meus Pedidos</a>
                    <a href="/wishlist" style={{ display: 'block', padding: '12px 20px', color: '#333', textDecoration: 'none' }}>Lista de Desejos</a>
                  </div>
                )}
              </div>

              <button
                onClick={() => alert('Configurações')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '4px'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </button>

              <button
                onClick={() => alert('Carrinho de compras')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
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

        {/* Categorias (grid responsivo) */}
        <div style={{ backgroundColor: '#003D7A', padding: '20px 0' }}>
          <div className="categories-grid">
            {categorias.map((cat) => (
              <a
                key={cat.nome}
                href={cat.link}
                style={{
                  display: 'block',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={cat.imagem}
                  alt={cat.nome}
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  padding: '12px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: '#0054A6',
                  background: '#FFFFFF'
                }}>
                  {cat.nome}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Listagem de produtos com .map() (grid responsivo) */}
        <div className="products-grid">
          {products.map((item) => (
            <div key={item.id} className="product-item">
              <p style={{ margin: 0, fontWeight: 600, color: '#333' }}>{item.title}</p>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h2 style={{ color: '#333' }}>Bem‑vindo à FuFuni</h2>
          <p style={{ color: '#666' }}>Explore nossas categorias e encontre as melhores ofertas em tecnologia.</p>
        </div>

        <footer style={{ backgroundColor: '#0054A6', color: '#FFFFFF', padding: '20px', textAlign: 'center', fontSize: '14px' }}>
          <p>© 2026 FuFuni – Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;