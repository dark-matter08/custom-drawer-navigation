import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/infrastructure/navigation/navigation-drawer.navigator';

import {Provider} from 'react-redux';
import store from './src/redux/stores/stores';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
