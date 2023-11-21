import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardHeader from '../../components/CardHeader/CardHeader'

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <CardHeader />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})