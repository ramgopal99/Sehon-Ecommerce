import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Modal, Button } from 'react-native';
import ProductCard from '../components/ProductCard'; // Import ProductCard component
import Category from '../components/Category'; // Import Category component
import BannerPage from '../components/BannerPage';
import CartPage from './CartPage'; // Import CartPage component

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to track if the cart is open
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Mock product data (you can replace this with your actual product data)
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      image: require('../images/product.jpg'),
      category: 'Category 1',
      description: "Incididunt consectetur elit cupidatat veniam id ex deserunt non ex ullamco. Excepteur labore ex ea do est ea laboris dolore. Ut dolor do cillum elit eu ipsum esse in duis adipisicing officia labore adipisicing."
    },
    {
      id: 2,
      title: 'Product 2',
      price: 19.99,
      image: require('../images/product3.jpg'),
      category: 'Category 2',
    },
    {
      id: 3,
      title: 'Product 2',
      price: 19.99,
      image: require('../images/product.jpg'),
      category: 'Category 3',
    },
    {
      id: 4,
      title: 'Product 2',
      price: 19.99,
      image: require('../images/product2.jpg'),
      category: 'Category 4',
    },
    {
      id: 5,
      title: 'Product 2',
      price: 19.99,
      image: require('../images/product2.jpg'),
      category: 'Category 2',
    },
    {
      id: 6,
      title: 'Product 2',
      price: 19.99,
      image: require('../images/product3.jpg'),
      category: 'Category 1',
    },
    // Add more product objects as needed
  ];

  // Get unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Function to add item to cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      {/* Render BannerPage component */}
      <BannerPage />
      
      {/* Render Category component */}
      <View>
        <Category
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />
      </View>
      
      {/* Render ProductCard components for filtered products */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.row}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItemToCart} />
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 20,
  },
});

export default HomePage;
