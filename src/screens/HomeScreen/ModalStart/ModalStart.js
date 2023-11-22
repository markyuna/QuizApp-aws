import React from 'react'
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { AntDesign, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';
import styles from '../styles';
import { useNavigation } from "@react-navigation/native";

// import Config from 'react-native-dotenv';
// import Config from 'react-native-config';

// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: Config.OPENAI_API_KEY,
// });

// const generateQuizQuestions = async () => {
//   const prompt = "Générer un quiz de culture générale avec 2 questions.";
//   const response = await openai.chat.create({
//     model: "gpt-3.5-turbo",
//     messages: [],
//     temperature: 0.5,
//     max_tokens: 1024,
//   });

//   return response.choices[0].message.content.trim().split('\n'); 
// };

const ModalStart = ({ modalVisible, setModalVisible }) => {
  const startClassicGame = async () => {
    const quizQuestions = navigation.navigate("Quiz")
    // Fermer le modal après avoir obtenu les questions
    setModalVisible(false);

    // console.log(quizQuestions);
  };
  

  const navigation = useNavigation();

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

            <Pressable style={styles.textStyle} onPress={startClassicGame}>
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
