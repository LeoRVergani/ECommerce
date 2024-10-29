import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: string;
  nome: string;
  foto: string;
  preco: number;
}

interface CartItem extends Product {
  quantidade: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantidade: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextProps {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
