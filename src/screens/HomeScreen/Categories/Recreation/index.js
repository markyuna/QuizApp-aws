import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecreationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Recreation</Text>
      <Image source={require("../../../../../assets/images/divertisement_icon.png")} style={{width: 200, height: 200}} />
    </View>
  )
}

export default RecreationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})