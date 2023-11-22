import React from 'react'
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { AntDesign, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';
import styles from '../styles';

const ModalStart = ({ modalVisible, setModalVisible }) => {
    return (
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="closecircleo" size={24} color="white" />
            </Pressable>

            <Text style={styles.modalText}>MODE DE JEU</Text>

            <Pressable style={styles.textStyle}>
              <EvilIcons name="play" size={35} color="white" />
              <Text style={{ color:'white', fontWeight:'bold'}}> CLASSIQUE</Text>
            </Pressable>

            <Pressable style={styles.textStyle}>
              <Ionicons name="timer-outline" size={30} color="white" />
              <Text style={{ color:'white', fontWeight:'bold'}}>  CONTRE LA MONTRE</Text>
            </Pressable>

            <Pressable style={styles.textStyle}>
              <Entypo name="grid" size={34} color="white" />
              <Text style={{ color:'white', fontWeight:'bold'}}> CATEGORIES</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    );
}

export default ModalStart
