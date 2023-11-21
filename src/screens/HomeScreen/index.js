import React from 'react';
import {SafeAreaView, Button, View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import {Auth} from 'aws-amplify';
import { FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const Home = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* <Text style={styles.title}>Go Near</Text> */}

        {/* <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable> */}
      </ImageBackground>

      {/* <View style={styles.startButton}>
        <TouchableOpacity 
          style={styles.button} 
          render
          onPress={() => navigation.navigate('Home')}
        >
        <CustomButton 
          text="START" 
          style={styles.startButton}
          onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
          <Text style={styles.startButton}>MULTIPLAYER</Text>
      </View> */}

      <SafeAreaView style={styles.container}>
        <CustomButton 
          text="START" 
          style={styles.startButton}
          onPress={() => navigation.navigate('Home')}
        />
        <CustomButton 
          text="MULTIPLAYER"
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;