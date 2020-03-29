import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator();

import incidents from './pages/Incidents';
import detail from './pages/Detail';

function Routes(){
  return(
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name='Incidents' component={incidents}/>
        <stack.Screen name='Detail' component={detail}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;