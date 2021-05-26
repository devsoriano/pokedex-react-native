import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParams} from './Navigator';
import {SearchSreen} from '../screens/SearchSreen';
import {PokemonScreen} from '../screens/PokemonScreen';

const TabSearch = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <TabSearch.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabSearch.Screen name="HomeScreen" component={SearchSreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
  );
};
