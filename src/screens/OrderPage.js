import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      {/* Your order list can be displayed here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default OrderPage;
