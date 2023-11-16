// app/index.js

import { Redirect, SafeAreaView, useLocalSearchParams } from "expo-router";

import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react-native';

import { AppRegistry } from 'react-native';
import App from '../app';
import { name as appName } from '../app.json';


AppRegistry.registerComponent(appName, () => App);


function Index() {

  return (
    <SafeAreaView style={{ alignContent: 'center' }}>
      <Redirect href='/app' />
    </SafeAreaView>
  );
}

export default withAuthenticator(Index);