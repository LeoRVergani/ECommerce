import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CartItemCard from '../components/CartItemCard';
import { useCart } from '../contexts/CartContext';

export default function CartScreen() {
  const { cartItems } = useCart();

  const getTotalPrice = (): number => {
    return cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            nome={item.nome}
            foto={item.foto}
            preco={item.preco}
            quantidade={item.quantidade}
          />
        ))}
      </ScrollView>
      <Text style={styles.total}>Total: R$ {getTotalPrice()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  scrollContainer: { paddingBottom: 20 },
  total: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
});
