import { useAppNavigation } from "../hooks/useNavigation";
import { useStore } from "../hooks/useStore";

const Home =({...props})=>{
    const {goToCart, goToCheckout, goToProduct} = useAppNavigation()
    const { products, loading, addToCart } = useStore();
    if(loading)return<div>Loading</div>
    return(
        <div {...props} className="flex flex-col">
            <button className="cursor-pointer" onClick={goToCart}>Carrinho</button>
            <button className="cursor-pointer" onClick={goToCheckout}>Checkout</button>
            <button className="cursor-pointer" onClick={(id)=>goToProduct('1')}>Produtos</button>
        </div>
    )
}

import { useState } from 'react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Buscando por: ${searchTerm}`);
  };

  const categories = [
    {
      name: 'Computadores',
      image: 'https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2023/02/computador-positivo-%C3%A9-bom.jpeg'
    },
    {
      name: 'Tele-móveis',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G0NBpaVIKoLiXMGXARpAnIB5lKX2KhYkJA&s'
    },
    {
      name: 'TVs e Projetores',
      image: 'https://s2-g1.glbimg.com/0pAYmpnM5v6t2OiXEYNDnmpU-vI=/0x0:1920x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/l/R/OqMyLYRkiqf3jrlBwlBw/guia-de-compras-projetoresimg-materia.jpg'
    },
    {
      name: 'Entre outros',
      image: 'https://chatgpt.com/backend-api/estuary/content?id=file_00000000a1ec71f58cba72b434b4daa5&ts=493723&p=fs&cid=1&sig=1baf0bbbd6f608db3de30ef9d022e4f1e57949bba60d2ca234e1d7d952dbe882&v=0'
    }
  ];

  // Ofertas do dia // 
  const dailyOffers = [
    { name: 'Notebook Gamer', price: 'R$ 3.299,90', img: 'https://via.placeholder.com/300x200/FF6500/FFFFFF?text=Notebook+Gamer' },
    { name: 'Smartphone 5G', price: 'R$ 1.899,90', img: 'https://via.placeholder.com/300x200/0054A6/FFFFFF?text=Smartphone+5G' },
    { name: 'Monitor 27"', price: 'R$ 1.099,90', img: 'https://via.placeholder.com/300x200/003D7A/FFFFFF?text=Monitor+27"' }
  ];

  // Poucas unidades (2 produtos) // 
  const lowStock = [
    { name: 'Teclado Mecânico RGB', price: 'R$ 249,90', img: 'https://via.placeholder.com/300x200/CC0000/FFFFFF?text=Teclado+Mec%C3%A2nico' },
    { name: 'Mouse Gamer 16000 DPI', price: 'R$ 179,90', img: 'https://via.placeholder.com/300x200/CC0000/FFFFFF?text=Mouse+Gamer' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/*Header*/}
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
              alt="Logo" 
              style={{ width: '50px', height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFFFFF', margin: 0 }}>FuFuni</h1>
          </a>

          <form onSubmit={handleSearch} style={{ 
            flex: 1, maxWidth: '600px', display: 'flex', alignItems: 'center',
            background: '#FFFFFF', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <input 
              type="text" 
              placeholder="Buscar produtos, marcas e muito mais..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ flex: 1, padding: '14px 20px', border: 'none', outline: 'none', fontSize: '15px' }} 
            />
            <button 
              type="submit"
              style={{ background: '#FF6500', border: 'none', padding: '14px 25px', cursor: 'pointer' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="/login" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Minha Conta
            </a>
            <a href="/carrinho" style={{ color: '#FFFFFF', textDecoration: 'none', position: 'relative' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span style={{
                position: 'absolute', top: '-5px', right: '-10px',
                background: '#FF6500', color: '#FFFFFF', fontSize: '10px',
                fontWeight: 'bold', width: '18px', height: '18px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>0</span>
            </a>
          </div>
        </header>
      </div>

      {/* Categorias com imagens */}
      <div style={{ maxWidth: '1400px', margin: '30px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '22px', color: '#333', marginBottom: '20px', textAlign: 'center' }}>Categorias</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {categories.map((cat, idx) => (
            <a key={idx} href={`/categoria/${cat.name.toLowerCase().replace(/ /g, '-')}`} style={{ textDecoration: 'none' }}>
              <div style={{
                borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s', background: '#FFFFFF'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x180/0054A6/FFFFFF?text=' + cat.name}
                />
                <div style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
                  {cat.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ofertas do dia */}
      <div style={{ maxWidth: '1400px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '22px', color: '#333', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🔥 Ofertas do Dia
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {dailyOffers.map((offer, idx) => (
            <div key={idx} style={{
              border: '1px solid #E0E0E0', borderRadius: '12px', padding: '15px',
              textAlign: 'center', transition: 'box-shadow 0.2s'
            }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <img src={offer.img} alt={offer.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ fontSize: '16px', margin: '10px 0 5px', color: '#333' }}>{offer.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0054A6' }}>{offer.price}</p>
              <button style={{
                background: '#FF6500', color: '#FFFFFF', border: 'none', padding: '10px 25px',
                borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', marginTop: '5px'
              }}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Últimas unidades */}
      <div style={{ maxWidth: '1400px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '22px', color: '#333', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          ⚡ Últimas Unidades
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {lowStock.map((item, idx) => (
            <div key={idx} style={{
              border: '2px solid #FFD700', borderRadius: '12px', padding: '15px',
              textAlign: 'center', background: '#FFF9E6', position: 'relative'
            }}>
              <span style={{
                position: 'absolute', top: '-10px', right: '-10px',
                background: '#CC0000', color: '#FFFFFF', padding: '5px 10px',
                borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'
              }}>
                Poucas unidades
              </span>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ fontSize: '16px', margin: '10px 0 5px', color: '#333' }}>{item.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0054A6' }}>{item.price}</p>
              <button style={{
                background: '#0054A6', color: '#FFFFFF', border: 'none', padding: '10px 25px',
                borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold'
              }}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/*Promoção 20%*/}
      <div style={{ backgroundColor: '#F4F7FC', padding: '50px 20px', marginTop: '50px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={{
            background: '#0054A6', color: '#FFFFFF', padding: '30px', borderRadius: '16px',
            textAlign: 'center', boxShadow: '0 10px 25px rgba(0,84,166,0.3)'
          }}>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>20% OFF</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>em todo o site com o cupom</p>
            <div style={{
              background: '#FF6500', padding: '15px 25px', borderRadius: '8px',
              fontSize: '24px', fontWeight: 'bold', display: 'inline-block'
            }}>
              FUFUNI20
            </div>
            <p style={{ fontSize: '14px', marginTop: '15px', opacity: 0.9 }}>Válido até 31/05/2026</p>
          </div>

          <div style={{
            background: '#FFFFFF', padding: '30px', borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)', textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>🔧 Concerto de Eletrônicos</h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
              Traga seu equipamento na nossa filial!
            </p>
            <p style={{ fontSize: '15px', color: '#777', marginBottom: '15px' }}>
              📍 Rua Tecnologia, 123 – Centro – São Paulo/SP<br />
              📞 (44)99847-6131
            </p>
            <a href="https://wa.me/5544998476131" target="_blank" style={{
              background: '#25D366', color: '#FFFFFF', textDecoration: 'none',
              padding: '12px 30px', borderRadius: '30px', fontWeight: 'bold', display: 'inline-block'
            }}>
              Falar no WhatsApp
            </a>
            <p style={{ fontSize: '13px', color: '#888', marginTop: '10px' }}>
              Orçamento sem compromisso. Consertamos computadores, notebooks, celulares e mais.
            </p>
          </div>
        </div>
      </div>

      {/* Rodapé simples */}
      <div style={{ backgroundColor: '#003D7A', padding: '25px', textAlign: 'center', color: '#FFFFFF', fontSize: '14px' }}>
        <p style={{ margin: 0 }}>© 2026 FuFuni – Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Home;