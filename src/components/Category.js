import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Category = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    onSelectCategory(category === selectedCategory ? null : category);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          {/* Render "All Categories" option */}
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === null && styles.selectedCategoryButton,
            ]}
            onPress={() => handleSelectCategory(null)}>
            <Text style={[styles.categoryText, selectedCategory === null && styles.selectedCategoryText]}>
              All Categories
            </Text>
          </TouchableOpacity>

          {/* Render categories */}
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={() => handleSelectCategory(category)}>
              <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginBottom:5,
    marginTop:10,
  },
  selectedCategoryButton: {
    backgroundColor: 'blue',
  },
  categoryText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedCategoryText: {
    color: 'white',
  },
});

export default Category;
