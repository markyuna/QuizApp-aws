import React, { useEffect, useState } from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
// import { Authenticator } from '@aws-amplify/ui-react-native';
// import { Auth, Hub } from 'aws-amplify/utils';
import { Text, View } from '../components/Themed';

import Home from './(tabs)/home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ConfirmEmail from './ConfirmEmail';
import ForgotPassword from './ForgotPassword';
import NewPassword from './NewPassword';

import TabLayout from './(tabs)/_layout';
// const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'SignIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.listen('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }


  return (
    <Authenticator.Provider>
      <Stack.Screen screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="./(tabs)/_layout"  />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
            />
            <Stack.Screen name="NewPassword" component={NewPassword} />
          </>
        )}
      </Stack.Screen>
    </Authenticator.Provider>
  );
}
