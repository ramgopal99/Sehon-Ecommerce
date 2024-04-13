// ProductForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ProductForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [picture1, setPicture1] = useState('');
  const [picture2, setPicture2] = useState('');
  const [picture3, setPicture3] = useState('');

  const handleAddProduct = () => {
    // Validation
    if (!productName || !price || !description || !picture1 || !picture2 || !picture3) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Send product data to server or perform add product logic
    onSubmit({ productName, price, description, picture1, picture2, picture3 });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Picture 1 URL"
        value={picture1}
        onChangeText={setPicture1}
      />
      <TextInput
        style={styles.input}
        placeholder="Picture 2 URL"
        value={picture2}
        onChangeText={setPicture2}
      />
      <TextInput
        style={styles.input}
        placeholder="Picture 3 URL"
        value={picture3}
        onChangeText={setPicture3}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default ProductForm;
