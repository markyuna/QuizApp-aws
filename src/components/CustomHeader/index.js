import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


const CustomHeader = ({ userPoints }) => {
    return (
      <View style={styles.headerContainer}>
        <Image source={require('../../../assets/images/or.png')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{`Puntos: ${userPoints}`}</Text>
        </View>
      </View>
    );
  };

export default CustomHeader;

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 0,
      borderColor: 'transparent',
      borderRadius: 15,
      backgroundColor: '#fff',
      margin: 10,
    },
    headerImage: {
      width: 50,
      height: 50,
      padding: 10,
    },
    headerTextContainer: {
      padding: 10,
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F9515',
    },
});
