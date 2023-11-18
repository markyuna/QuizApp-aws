// app/index.tsx

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
// import { SignOutButton } from '../components/SignOutButton';

import awsExports from '../src/aws-exports';
// import RootLayout from './_layout';

import { Redirect } from 'expo-router';

Amplify.configure(awsExports);
 

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Redirect to="/home" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#2e78b7',
    borderRadius: 24,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default App;
