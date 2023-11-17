import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function DetailsScreen() {
  // const router = useRouter();
  // const params = useLocalSearchParams();
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Details</Text>
      <Text>
        Update the title
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#093E73',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
