//src/navigation/index.js

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import {Auth, Hub} from 'aws-amplify';

import BottomTabNavigator from './BottomTabNavigator';
import ContraMontreScreen from '../screens/HomeScreen/ContraMontre/QuizScreen';
import ResultsScreen from '../screens/HomeScreen/ResultsScreen';
import ClassiqueScreen from '../screens/HomeScreen/Classique';
import CategoriesScreen from '../screens/HomeScreen/Categories';

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
  
    const hubListener = Hub.listen('auth', listener);
    
    // Llama a remove en la variable
    return () => hubListener();
  }, []);
  

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
          <Stack.Screen name="ClassiqueScreen" component={ClassiqueScreen} />
          <Stack.Screen 
            name="ContraMontre" 
            component={ContraMontreScreen} 
            options={{
              headerShown:true,
            }}
          />
          <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown:false}}/>
          <Stack.Screen 
            name="Categories" 
            component={CategoriesScreen}  
            options={{
              // header: () => null,
              headerShown: true,
            }}
          />
          </>
        ) : ( 
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;