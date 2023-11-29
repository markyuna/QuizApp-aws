import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GeographieScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Geographie</Text>
      <Image source={require("../../../../../assets/images/geographie_icon.png")} style={{width: 200, height: 200}} />
    </View>
  )
}

export default GeographieScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})