import React, { useState } from 'react';

const products = [
  {
    id: 'bp-001',
    name: 'Bruchplatte Typ BPH-125',
    description: 'Passend für Exzenterpresse SXP 125. Material: S355J2G3. Maße: 150 x 120 x 15 mm.',
    price: 87.9,
  },
  {
    id: 'bp-002',
    name: 'Bruchplatte Typ BPH-200',
    description: 'Für Hydraulikpresse HYP 200. Material: C45. Maße: 180 x 140 x 20 mm.',
    price: 112.5,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6'>
      <h1 className='text-3xl font-bold text-center'>🛒 Bruchplatten-Shop</h1>
      <div className='grid gap-4 md:grid-cols-2'>
        {products.map((p) => (
          <div key={p.id} className='border rounded-2xl p-4 shadow-sm'>
            <h2 className='text-xl font-semibold'>{p.name}</h2>
            <p className='text-sm text-gray-600 mb-2'>{p.description}</p>
            <p className='text-lg font-bold'>{p.price.toFixed(2)} €</p>
            <button className='mt-2 bg-blue-600 text-white px-3 py-1 rounded' onClick={() => addToCart(p)}>In den Warenkorb</button>
          </div>
        ))}
      </div>
      <div className='border-t pt-4'>
        <h2 className='text-2xl font-bold mb-2'>🧾 Warenkorb</h2>
        {cart.length === 0 ? <p>Der Warenkorb ist leer.</p> : (
          <ul className='space-y-2'>
            {cart.map((item, i) => (
              <li key={i} className='flex justify-between'>
                <span>{item.name}</span>
                <span>{item.price.toFixed(2)} €</span>
              </li>
            ))}
            <li className='flex justify-between font-bold border-t pt-2'>
              <span>Gesamt:</span>
              <span>{total} €</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
