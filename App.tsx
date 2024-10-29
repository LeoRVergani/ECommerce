import React from 'react';
import { CartProvider } from './contexts/CartContext';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

export default function App() {
  return (
    <CartProvider>
      {/* Exemplo de navegação, altere conforme necessário */}
      <ProductsScreen />
      {/* <CartScreen /> */}
    </CartProvider>
  );
}