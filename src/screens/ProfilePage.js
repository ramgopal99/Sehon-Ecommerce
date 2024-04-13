import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <TouchableOpacity style={styles.area} onPress={() => navigateToScreen('ProductPage')}>
        <Text style={styles.buttonText}>ProductPage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => navigateToScreen('SellerLogin')}>
        <Text style={styles.buttonText}>Seller</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => navigateToScreen('TermsAndConditionsPage')}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => navigateToScreen('AboutUsPage')}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.area} onPress={() => navigateToScreen('ContactUsPage')}>
        <Text style={styles.buttonText}>Contact Us</Text>
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
