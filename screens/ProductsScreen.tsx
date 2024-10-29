import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import productsData from '../data/products.json'; // Importa a lista de produtos

interface Product {
  id: string;
  nome: string;
  foto: string;
  preco: number;
}

export default function ProductsScreen() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);

  useEffect(() => {
    const filtered = productsData.filter((product) =>
      product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produto..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            nome={product.nome}
            foto={product.foto}
            preco={product.preco}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  searchInput: { height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 20 },
  productsContainer: { paddingBottom: 20 },
});
