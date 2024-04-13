import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleAddProduct = (data) => {
    // Handle form submission here
    setFormData(data);
    setShowForm(false); // Hide the form after submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      {showForm ? (
        <ProductForm onSubmit={handleAddProduct} />
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      )}
      {formData && (
        <View style={styles.formSummary}>
          <Text style={styles.summaryText}>Product Name: {formData.productName}</Text>
          <Text style={styles.summaryText}>Price: {formData.price}</Text>
          <Text style={styles.summaryText}>Description: {formData.description}</Text>
          {/* Display other form data here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  formSummary: {
    marginTop: 20,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProductPage;
