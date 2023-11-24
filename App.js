/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
// import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure(config);


const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});


// const customTheme = {
//   ...AmplifyTheme,
//   button: {
//     ...AmplifyTheme.button,
//     backgroundColor: '#006B58',
//     borderRadius: 20,
//   }
// }

export default (App);