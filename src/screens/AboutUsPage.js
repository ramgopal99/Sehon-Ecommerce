import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../images/logo.png')} // Replace with your logo image
        style={styles.logo}
      />
      <Text style={styles.title}>About Our Store</Text>
      <Text style={styles.paragraph}>
        Welcome to our ecommerce store! We are committed to providing high-quality products and exceptional customer service to our valued customers. Our mission is to make online shopping convenient, enjoyable, and hassle-free for everyone.
      </Text>
      <Text style={styles.paragraph}>
        At our store, you'll find a wide selection of products ranging from clothing and accessories to electronics and home goods. We carefully curate our collection to ensure that each item meets our standards of quality and style.
      </Text>
      <Text style={styles.paragraph}>
        Our team is dedicated to creating a positive shopping experience for you. Whether you have questions about our products, need assistance with your order, or simply want to provide feedback, we're here to help!
      </Text>
      <Text style={styles.paragraph}>
        Thank you for choosing our store. We appreciate your support and look forward to serving you.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default AboutUsPage;
