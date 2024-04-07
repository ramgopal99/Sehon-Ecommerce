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

      // Extract title and price from the product object
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {routeList.length === 0 ? (
        <Text>No items in the cart</Text>
      ) : (
        <ScrollView>
          {routeList.map((route, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{route.title}</Text>
                <Text style={styles.itemPrice}>{route.price}</Text>
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
      )}
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
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartPage;
