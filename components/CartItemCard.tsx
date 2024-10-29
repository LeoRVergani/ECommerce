import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CartItemCard({ nome, foto, preco, quantidade = 1 }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.price}>R$ {preco}</Text>
        <Text style={styles.quantity}>Quantidade: {quantidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
