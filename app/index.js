// app/index.tsx

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Authenticator, withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
// import { SignOutButton } from '../components/SignOutButton';

// import RootLayout from './_layout';

import { Redirect } from 'expo-router';

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);
 

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Redirect to="/(tabs)" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
