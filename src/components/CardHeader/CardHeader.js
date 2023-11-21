import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const CardHeader = () => {
  return (
    <View style={styles.container} >
        
            <FontAwesome5 name="user-circle" size={50} color="#1F9515" style={{padding: 10}}/>
            <View style={styles.user}>
                <Text>Vous</Text>
                <Text>0 pts</Text>
                <Text>Niveau 1 ( 0% )</Text>
            </View>
       
      
      <View style={styles.bag}>
        <Image 
            style={{width: 30, height: 50, padding: 10}}
            source={require('../../../assets/images/moneybag.png')}
            
        />
        <Text>30</Text>
      </View>
    </View>
  )
}

export default CardHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 15,        
        backgroundColor: '#fff023',
    },
    user: {
        padding: 10,
        flexDirection: 'column',
        // borderColor: 'blue',
        // borderRightWidth: 2,
        // marginLeft: 10,
    },
    bag: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15, 
        // borderColor: 'blue',
        backgroundColor: '#fff',
    }
})