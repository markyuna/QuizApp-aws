import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../screens/UserProfile';
import Collection from '../screens/Collection';
import Boutique from '../screens/Boutique';
import SettingScreen from '../screens/SettingScreen';


const BottomTab = createBottomTabNavigator();
// const INITIAL_ROUTE_NAME = 'Login';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    // <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    <BottomTab.Navigator 
    screenOptions={{
      tabBarShowLabel: false
    }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user-secret" />,
        }}
      />
      <BottomTab.Screen
        name="Collection"
        component={Collection}
        options={{
          title: 'Collection',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="layer-group" />,
        }}
      />
      <BottomTab.Screen
        name="Boutique"
        component={Boutique}
        options={{
          title: 'Boutique',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="shopping-cart" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="whmcs" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Home':
//       return 'Home';
//     case 'SearchInvoice':
//       return 'Search Invoice';
//     case 'Links':
//       return 'Links to learn more';
//     case 'Login':
//       return 'Links login';
//   }
// }