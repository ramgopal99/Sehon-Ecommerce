import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfilePage = () => {
  const handlePress = (text) => {
    console.log(`${text} area pressed`);
    // Handle navigation or any action related to the pressed area
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <TouchableOpacity style={styles.area} onPress={() => handlePress('Account')}>
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => handlePress('Terms and Conditions')}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => handlePress('About Us')}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => handlePress('Contact Us')}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => handlePress('Seller')}>
        <Text style={styles.buttonText}>Seller</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    fontFamily: 'Roboto', // Custom font family
  },
  area: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#0056b3',
    overflow: 'hidden',
    // Gradient background
    backgroundColor: '#007bff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Roboto', // Custom font family
  },
});

export default ProfilePage;
