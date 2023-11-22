import React from 'react'
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
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
  const startMontreGame = async () => {
    const quizQuestions = navigation.navigate("ContraMontre")
    setModalVisible(false);

    console.log(quizQuestions);
  };

  const startClassicGame = async () => {
    const quizQuestions = navigation.navigate("Classique")
    setModalVisible(false);

    console.log(quizQuestions);
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
       
            <Pressable 
              style={styles.textStyle}
              onPress={startClassicGame}
            >
              <EvilIcons name="play" size={35} color="white" />
              <Text style={{ color:'white', fontWeight:'bold'}}> CLASSIQUE</Text>
            </Pressable>

            <Pressable style={styles.textStyle} onPress={startMontreGame}>
              <Ionicons name="timer-outline" size={30} color="white" />
              <Text style={{ color:'white', fontWeight:'bold'}}>  CONTRE LA MONTRE</Text>
            </Pressable>

            <Pressable style={styles.textStyle}>
              <Entypo name="grid" size={34} color="white" />
              <Text style={{ color:'white', fontWeight:'bold'}}> CATEGORIES</Text>
            </Pressable>
            <Pressable 
              // style={styles.textStyle}
              onPress={() => navigation.navigate("Rules")}
            >
              {/* <Entypo name="grid" size={34} color="white" /> */}
              {/* <Text style={styles.textRules}>QUIZ RULES</Text> */}
            </Pressable>

            <View style={{ padding: 10 }}>
      <Text
        style={{
          textAlign: "center",
          color: "magenta",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        QUIZ RULES
      </Text>

      <View
        style={{
          padding: 10,
          backgroundColor: "#F88379",
          borderRadius: 6,
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            For each correct answer you get 5 points
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            There is no negative marking for wrong answer
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Each question has a time limit of 15 sec
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            You should answer all the questions compulsarily
          </Text>
        </View>
      </View>
    </View>
          </View>
        </View>
      </Modal>
    </View>
    );
}

export default ModalStart
