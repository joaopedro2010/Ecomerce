import { useState } from 'react';

const Cart = ({ ...props }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'RTX 4070 Super',
      price: 3399.90,
      quantity: 1,
      image: 'https://static.gigabyte.com/StaticFile/Image/Global/6411fd17d56df91d54c2d9dde57f9c4a/ProductRemoveBg/39176'
    },
    {
      id: 2,
      name: 'RTX 4060 Ti',
      price: 2599.90,
      quantity: 1,
      image: 'https://storage-asset.msi.com/global/picture/product/product_1684388309f60246f6be0d4cac5d4beb1106192066.webp'
    }
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div {...props} style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      
      <div style={{ backgroundColor: '#0054A6', padding: '15px 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFF'
        }}>
          <h1 style={{ margin: 0 }}>FuFuni</h1>
          <span>Carrinho de Compras</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        
        <h2 style={{ marginBottom: '20px' }}>Seu Carrinho</h2>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            Seu carrinho está vazio.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            
           
            <div>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '20px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  alignItems: 'center',
                  background: '#FAFAFA'
                }}>
                  
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '100px', borderRadius: '8px' }} 
                  />

                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0 }}>{item.name}</h3>
                    <p style={{ color: '#666', margin: '5px 0' }}>
                      R$ {item.price.toFixed(2)}
                    </p>

                    {/* CONTROLE DE QUANTIDADE */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{
                          padding: '5px 10px',
                          border: '1px solid #CCC',
                          background: '#FFF',
                          cursor: 'pointer'
                        }}
                      >-</button>

                      <span>{item.quantity}</span>

                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{
                          padding: '5px 10px',
                          border: '1px solid #CCC',
                          background: '#FFF',
                          cursor: 'pointer'
                        }}
                      >+</button>
                    </div>
                  </div>

                  {/* REMOVER */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: '#FF6500',
                      color: '#FFF',
                      border: 'none',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            {/* RESUMO */}
            <div style={{
              background: '#F8F9FA',
              padding: '25px',
              borderRadius: '12px',
              height: 'fit-content',
              border: '1px solid #E0E0E0'
            }}>
              <h3>Resumo do Pedido</h3>

              <div style={{ margin: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Frete</span>
                  <span>Grátis</span>
                </div>

                <hr />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px' }}>
                  <span>Total</span>
                  <span style={{ color: '#0054A6' }}>
                    R$ {total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button style={{
                width: '100%',
                padding: '15px',
                background: '#0054A6',
                color: '#FFF',
                border: 'none',
                borderRadius: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSizeAdjust: '-moz-initial' 
              }}>
                Finalizar Compra
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;