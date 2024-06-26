import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TermsAndConditionsPage from './src/screens/TermsAndConditionsPage';
import ProductDetailPage from './src/screens/ProductDetailPage';
import AboutUsPage from './src/screens/AboutUsPage';
import NavBar from './src/screens/NavBar';
import ContactUsPage from './src/screens/ContactUsPage';
import SellerLogin from './src/screens/SellerLogin';
import SellerSignup from './src/screens/SellerSignup';
import ProductPage from './src/screens/ProductPage';

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
        <Stack.Screen name="TermsAndConditionsPage" component={TermsAndConditionsPage} />
        <Stack.Screen name="AboutUsPage" component={AboutUsPage} />
        <Stack.Screen name="ContactUsPage" component={ContactUsPage} />
        <Stack.Screen name="SellerLogin" component={SellerLogin} />
        <Stack.Screen name="SellerSignup" component={SellerSignup} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
