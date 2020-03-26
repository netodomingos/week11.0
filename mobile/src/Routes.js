import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Incidents from './pages/Incidents/Incidents'
import Details from './pages/Details/Details'


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      
        screenOptions={{ 
          headerShown: false,
          // Mudando transição de navegação!
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
