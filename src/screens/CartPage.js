import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CartPage = () => {
  const [routeList, setRouteList] = useState([]);

  // Accessing route params
  const route = useRoute();
  
  useEffect(() => {
    try {
      const { product } = route.params;

      // Extract title, id, and price from the product object
      const { id, title, price } = product;

      // Check if the product with the same ID already exists
      const existingProductIndex = routeList.findIndex(item => item.id === id);

      if (existingProductIndex !== -1) {
        // If product exists, update its quantity
        setRouteList(prevRouteList =>
          prevRouteList.map((item, index) =>
            index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        // Otherwise, add the product to the route list with initial quantity 1
        setRouteList(prevRouteList => [...prevRouteList, { id, title, price, quantity: 1 }]);
      }

    } catch (error) {
      // Do nothing or handle error if needed
    }
  }, [route.params]);

  const removeItem = (idToRemove) => {
    setRouteList(prevRouteList => prevRouteList.filter(item => item.id !== idToRemove));
  };

  const incrementQuantity = (id) => {
    setRouteList(prevRouteList =>
      prevRouteList.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setRouteList(prevRouteList =>
      prevRouteList.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Calculate total price
  const totalPrice = routeList.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <ScrollView style={{ flex: 1 }}>
  {routeList.map((route, index) => (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{route.title}</Text>
        <Text style={styles.itemPrice}>Price: ${route.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decrementQuantity(route.id)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{route.quantity}</Text>
        <TouchableOpacity onPress={() => incrementQuantity(route.id)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeItem(route.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 5,
    marginRight:5,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 18,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft:8,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#20b5e3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartPage;
