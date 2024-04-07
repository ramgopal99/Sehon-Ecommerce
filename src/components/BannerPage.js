import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BannerPage = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Define your banner images here
  const bannerImages = [
    require('../images/product.jpg'),
    require('../images/product2.jpg'),
    require('../images/product3.jpg'),
    // Add more banner images as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment currentBannerIndex, and loop back to 0 if it exceeds the number of images
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 2500); // Change banner every two seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Runs only once on component mount

  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <Image
        source={bannerImages[currentBannerIndex]}
        style={styles.bannerImage}
        resizeMode="contain" // Adjust resizeMode as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bannerImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default BannerPage;
