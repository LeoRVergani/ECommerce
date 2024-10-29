import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductCardProps {
  nome: string;
  foto: string;
  preco: number;
  onAddToCart: () => void;
}

export default function ProductCard({ nome, foto, preco, onAddToCart }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.image} />
      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.price}>R$ {preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
        <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center'
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

