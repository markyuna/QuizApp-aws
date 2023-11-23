import { Link } from 'expo-router';
import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';

const SettingScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.container}>
      <CustomButton
        text={'Sign out'}
        onPress={signOut}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // Puedes agregar estilos adicionales para el botón aquí
  },
});

export default SettingScreen;
