import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import ProductDetailPage from './src/screens/ProductDetailPage';
import CartPage from './src/screens/CartPage';
import NavBar from './src/screens/NavBar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavBar"
          component={NavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
