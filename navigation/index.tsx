import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Home from '../screens/Home';
import ChannelDetail from '../screens/ChannelDetail';
import PlayerScreen from '../screens/PlayerScreen';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="ChannelDetail" component={ChannelDetail} options={{ title: 'Channel' }} />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} options={{ title: 'Player' }} />
    </Stack.Navigator>
  );
}
