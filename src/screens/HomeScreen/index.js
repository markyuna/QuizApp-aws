import React, {useState} from 'react';
import {SafeAreaView, Button, View, ImageBackground, Text, Pressable, Modal } from 'react-native';
import styles from './styles';
import {Auth} from 'aws-amplify';
import { FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import ModalStart from './ModalStart/ModalStart';

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <CustomButton 
          text="START" 
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        />
        <CustomButton 
          text="MULTIPLAYER"
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        />

      <ModalStart modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </SafeAreaView>
    </View>
  );
};

export default Home;